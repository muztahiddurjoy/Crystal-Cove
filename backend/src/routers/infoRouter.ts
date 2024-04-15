import {Router} from 'express'
import { addInfoController, getInfoController } from '../controllers/informationController'
import passport from 'passport'
const router = Router()

router.get('/', getInfoController)
router.post('/',passport.authenticate('jwt',{session:false}), addInfoController)

export default router