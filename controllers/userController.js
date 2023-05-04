import UserService from '../service/userService.js';

class UserController {

    async create(req, res) {
        try {
            const user = await UserService.create({ username: req.body.username, email: req.body.email, password: req.body.password });
            // res.status(201).json({ message: 'User registered successfully' });
            res.render('index', { user: req.user });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const updateUser = await UserService.update(req.body);
            return res.status(200).json(updateUser);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async delete(req, res) {
        try {
            const user = await UserService.delete(req.params.id)
            return res.status(200).json({ message: 'User delete' });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

export default new UserController()

