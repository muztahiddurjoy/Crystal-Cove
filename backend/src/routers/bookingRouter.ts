import {Router} from 'express'
const router = Router()
import passport from 'passport'
import { createBookingController, getBookingByDateController, getBookingsController, getUserBookingsController } from '../controllers/bookingController'

router.get('/',passport.authenticate('jwt',{session:false}),getBookingsController)
router.get('/user/:uid',getUserBookingsController)
router.get('/date',getBookingByDateController)
router.post('/',createBookingController)


export default router