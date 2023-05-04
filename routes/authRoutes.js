import express from 'express';
import passport from '../config/passport.js';
import userController from '../controllers/userController.js';

const router = express.Router();

router.post('/register', userController.create);
router.put('/update', userController.update);
router.delete('/delete/:id', userController.delete);
router.post('/login', passport.authenticate('local'), (req, res) => {
    // res.json({ message: 'User logged in successfully', user: req.user });
    res.render('index', { user: req.user });
});



router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/auth/login' }),
    (req, res) => {
        res.redirect('/');
    }
);

export default router;
