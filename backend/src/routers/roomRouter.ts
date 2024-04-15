import {Router} from 'express'
const router = Router()
import {createRoomController, getRoomsController, getSingleRoomController} from '../controllers/roomController'
import passport from 'passport'

router.get('/', getRoomsController)
router.get('/:id', getSingleRoomController)
router.post('/',passport.authenticate('jwt',{session:false}),createRoomController)

export default router