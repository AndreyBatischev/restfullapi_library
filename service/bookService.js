import Book from '../models/Book.js'

class BookService {
    async create(book) {
        const createdBook = await Book.create(book);
        return createdBook
    }

    async getAll() {
        const book = await Book.find()
        return book
    }

    async getOne(id) {
        if (!id) {
            throw new Error('id not found')
        }
        const book = await Book.findById(id)
        return book
    }

    async update(book) {
        if (!book._id) {
            throw new Error('id not found')
        }
        const updatedBook = await Book.findOneAndUpdate({ _id: book._id }, book, { new: true })
        return updatedBook
    }

    async delete(id) {
        if (!id) {
            throw new Error('id not found')
        }
        const book = await Book.findByIdAndDelete(id)
        return book
    }
}

export default new BookService()