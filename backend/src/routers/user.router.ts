import {Router} from 'express'
import {userController} from "../controllers/user.controller";

const router = Router();

router.get('/', userController.getList)

router.post('/', userController.createUser)

export const userRouter = router;