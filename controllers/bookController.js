import BookService from '../service/bookService.js'

class BookController {

    async create(req, res) {
        try {
            const book = await BookService.create(req.body);
            return res.status(201).json(book);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async getAll(req, res) {
        try {
            const books = await BookService.getAll();
            return res.status(200).json(books);
            // return res.render('books', { books: books });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async getOne(req, res) {
        try {
            const book = await BookService.getOne(req.params.id);
            return res.json(book);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async update(req, res) {
        try {
            const updateBook = await BookService.update(req.body);
            return res.status(200).json(updateBook);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async delete(req, res) {
        try {
            const book = await BookService.delete(req.params.id);
            return res.status(200).json({ message: 'Book delete' });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

export default new BookController()

