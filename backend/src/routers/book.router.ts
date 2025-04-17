import {Router} from 'express'
import {bookController} from "../controllers/book.controller";

const router = Router();

router.get('/', bookController.getList)

router.post('/', bookController.createBook)

router.get('/:bookId', bookController.getById)

router.delete('/:bookId', bookController.deleteBook)

router.put('/:bookId', bookController.updateBook)

export const bookRouter = router

