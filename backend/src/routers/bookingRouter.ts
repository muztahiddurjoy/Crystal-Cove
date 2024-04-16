import {Router} from 'express'
const router = Router()
import passport from 'passport'
import { createBookingController, getBookingByDateController, getBookingsController, getUserBookingsController } from '../controllers/bookingController'

router.get('/',passport.authenticate('jwt',{session:false}),getBookingsController)
router.get('/user',passport.authenticate('jwt',{session:false}),getUserBookingsController)
router.get('/date',getBookingByDateController)
router.post('/',passport.authenticate('jwt',{session:false}),createBookingController)


export default router