import { Router } from 'express';
const router = Router();
import { getAllBooks, createBook, getBookById, updateBook, deleteBook } from '../controllers/bookController.js';


// Маршруты для CRUD операций с книгами
router.get('/books', getAllBooks);
router.post('/books', createBook);
router.get('/books/:id', getBookById);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;
