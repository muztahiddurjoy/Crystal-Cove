import {Router} from 'express'
import { addInfoController, getInfoController } from '../controllers/informationController'
const router = Router()

router.get('/', getInfoController)
router.post('/', addInfoController)

export default router