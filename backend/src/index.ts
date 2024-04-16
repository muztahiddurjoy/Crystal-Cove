import express from 'express'
import contactRouter from './routers/contactRouter'
import infoRouter from './routers/infoRouter'
import reviewRouter from './routers/reviewRouter'
import authRouter from './routers/authRouter'
import roomRouter from './routers/roomRouter'
import userRouter from './routers/userRouter'
import bookingRouter from './routers/bookingRouter'
import passport from 'passport'
import {strategy} from './middlewares/checkAuth'
import cors from 'cors'
import {config} from 'dotenv'

const app = express()
app.use(express.json())
app.use(cors())
config()
passport.use(strategy)
app.use(passport.initialize())
app.use(authRouter)
app.use('/contact',contactRouter)
app.use('/info',infoRouter)
app.use('/review',reviewRouter)
app.use('/rooms',roomRouter)
app.use('/user',userRouter)
app.use('/booking',bookingRouter)

app.listen(process.env.PORT, () => {
    console.log('listening on port ',process.env.PORT)
})