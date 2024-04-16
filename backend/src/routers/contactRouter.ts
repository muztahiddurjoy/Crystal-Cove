import {Router} from 'express'
const router = Router()
import passport from 'passport'
import {createContactController, getContactController} from '../controllers/contactController'

router.get('/',passport.authenticate('jwt',{session:false}), getContactController)
router.post('/', createContactController)

export default router