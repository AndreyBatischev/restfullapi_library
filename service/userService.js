import User from '../models/User.js';

class UserService {

    async create(user) {
        const newUser = await User.create(user);
        return newUser
    }

    async update(user) {
        if (!user._id) {
            throw new Error('id not found')
        }
        const updatedUser = await Book.findOneAndUpdate({ _id: user._id }, user, { new: true })
        return updatedUser
    }

    async delete(id) {
        if (!id) {
            throw new Error('id not found')
        }
        const user = await User.findByIdAndDelete(id)
        return user
    }
}

export default new UserService()