import {Router} from 'express'
const router = Router()
import {createContactController, getContactController} from '../controllers/contactController'

router.get('/', getContactController)
router.post('/', createContactController)

export default router