import { ExtractJwt, Strategy } from "passport-jwt"

export const strategy = new Strategy({
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.AUTH_SECRET!
}, (payload, done) => {
    done(null, payload)
})