import {Router} from 'express'
import {commentController} from "../controllers/comment.controller";

const router = Router();

router.get('/', commentController.getList)

router.post('/', commentController.createComment)

router.post('/', commentController.deleteComment)

export const commentRouter = router;