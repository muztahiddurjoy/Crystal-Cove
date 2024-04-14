import {Router} from 'express'
const router = Router()
import {addReviewController,getReviewController} from '../controllers/reviewController'

router.get('/', getReviewController)
router.post('/', addReviewController)

export default router