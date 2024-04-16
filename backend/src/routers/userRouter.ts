import {Router} from 'express'
import { getUserController } from '../controllers/userController'
import passport from 'passport'
const router = Router()

router.get('/',passport.authenticate('jwt',{session:false}),getUserController)

export default router