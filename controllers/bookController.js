import Book from '../models/book.js';

// Обработчики для CRUD операций с книгами
export async function getAllBooks(req, res) {
    try {
        const books = await Book.find();
        return res.status(200).json(books);
        // return res.render('books', { books: books });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function createBook(req, res) {
    try {
        const book = await Book.create(req.body);
        return res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getBookById(req, res) {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' })
        }
        return res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function updateBook(req, res) {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' })
        }
        return res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function deleteBook(req, res) {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' })
        }
        return res.status(200).json({ message: 'Book delete' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}