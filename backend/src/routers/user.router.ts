import {Router} from 'express'
import {userController} from "../controllers/user.controller";

const router = Router();

router.get('/', userController.getList)

router.post('/', userController.createUser)

router.delete('/:userId', userController.deleteUser)

router.put('/:userId', userController.updateUser)

export const userRouter = router;