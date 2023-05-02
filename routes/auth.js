import express from 'express';
import passport from '../config/passport.js';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const newUser = new User({ username: req.body.username, email: req.body.email, password: req.body.password });
        await newUser.save();
        // res.status(201).json({ message: 'User registered successfully' });
        res.render('index', { user: req.user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    // res.json({ message: 'User logged in successfully', user: req.user });
    res.render('index', { user: req.user });
});

router.put('/update', async (req, res) => {
    // Обновление данных пользователя
});

router.delete('/delete', async (req, res) => {
    // Удаление пользователя
});

export default router;
