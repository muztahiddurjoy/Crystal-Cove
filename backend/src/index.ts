import express from 'express'
// import {initialize} from 'passport'
import contactRouter from './routers/contactRouter'
import infoRouter from './routers/infoRouter'
import reviewRouter from './routers/reviewRouter'
import authRouter from './routers/authRouter'
import passport from 'passport'
import {Strategy,ExtractJwt} from 'passport-jwt'
import cors from 'cors'
import {config} from 'dotenv'

const app = express()
app.use(express.json())
app.use(cors())
config()
passport.use(new Strategy({
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.AUTH_SECRET!
}, (payload, done) => {
    console.log(payload)
}))
app.use(passport.initialize())
app.use('/contact',contactRouter)
app.use('/info',passport.authenticate('jwt',{session:false}),infoRouter)
app.use('/review',reviewRouter)
app.use('/user',authRouter)

app.listen(8080, () => {
    console.log('listening on port 8080')
})