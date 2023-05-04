import express from 'express';
import passport from '../config/passport.js';
import User from '../models/User.js';
import userController from '../controllers/userController.js';

const router = express.Router();

router.post('/register', userController.create);
router.put('/update', userController.update);
router.delete('/delete/:id', userController.delete);
router.post('/login', passport.authenticate('local'), (req, res) => {
    // res.json({ message: 'User logged in successfully', user: req.user });
    res.render('index', { user: req.user });
});

export default router;
