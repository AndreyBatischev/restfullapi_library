import express from 'express';
import passport from '../config/passport';
import User from '../models/User';

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const newUser = new User({ email: req.body.email, password: req.body.password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({ message: 'User logged in successfully', user: req.user });
});

router.put('/update', async (req, res) => {
    // Обновление данных пользователя
});

router.delete('/delete', async (req, res) => {
    // Удаление пользователя
});

export default router;
