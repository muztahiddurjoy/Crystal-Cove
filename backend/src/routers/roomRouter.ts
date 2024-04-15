import {Router} from 'express'
const router = Router()
import {createRoomController, getRoomsController, getSingleRoomController} from '../controllers/roomController'
import passport from 'passport'
import { getSearchController } from '../controllers/searchController'

router.get('/', getRoomsController)
router.get('/:id', getSingleRoomController)
router.post('/',passport.authenticate('jwt',{session:false}),createRoomController)
router.get('/user/search',getSearchController)

export default router