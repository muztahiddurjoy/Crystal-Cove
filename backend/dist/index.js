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
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// app.use(initialize())
app.use('/contact', contactRouter_1.default);
app.use('/info', infoRouter_1.default);
app.use('/review', reviewRouter_1.default);
app.listen(8080, () => {
    console.log('listening on port 8080');
});
