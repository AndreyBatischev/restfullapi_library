import { Router } from 'express';
import BookController from '../controllers/bookController.js';

const router = Router();

// Маршруты для CRUD операций с книгами
router.get('/books', BookController.getAll);
router.post('/books', BookController.create);
router.get('/books/:id', BookController.getOne);
router.put('/books/:id', BookController.update);
router.delete('/books/:id', BookController.delete);

export default router;
