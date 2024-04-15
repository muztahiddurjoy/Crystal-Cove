"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import {initialize} from 'passport'
const contactRouter_1 = __importDefault(require("./routers/contactRouter"));
const infoRouter_1 = __importDefault(require("./routers/infoRouter"));
const reviewRouter_1 = __importDefault(require("./routers/reviewRouter"));
const authRouter_1 = __importDefault(require("./routers/authRouter"));
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = require("passport-jwt");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
(0, dotenv_1.config)();
passport_1.default.use(new passport_jwt_1.Strategy({
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.AUTH_SECRET
}, (payload, done) => {
    console.log(payload);
}));
app.use(passport_1.default.initialize());
app.use('/contact', contactRouter_1.default);
app.use('/info', passport_1.default.authenticate('jwt', { session: false }), infoRouter_1.default);
app.use('/review', reviewRouter_1.default);
app.use('/user', authRouter_1.default);
app.listen(8080, () => {
    console.log('listening on port 8080');
});
