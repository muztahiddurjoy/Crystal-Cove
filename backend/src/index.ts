import express from 'express'
// import {initialize} from 'passport'
import contactRouter from './routers/contactRouter'
import infoRouter from './routers/infoRouter'
import reviewRouter from './routers/reviewRouter'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())

// app.use(initialize())
app.use('/contact',contactRouter)
app.use('/info',infoRouter)
app.use('/review',reviewRouter)
app.listen(8080, () => {
    console.log('listening on port 8080')
})