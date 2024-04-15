import {Router} from 'express'
const router = Router()
import passport from 'passport'
import {addReviewController,getReviewController} from '../controllers/reviewController'

router.get('/', getReviewController)
router.post('/',passport.authenticate('jwt',{session:false}),addReviewController)

export default router