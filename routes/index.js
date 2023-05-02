import { Router } from 'express';
const router = Router();

// Главная страница
router.get('/', (req, res) => {
    res.render('index', { user: req.user });
});

router.get('/add', (req, res) => {
    res.render('add-book');
});

router.get('/auth/register', (req, res) => {
    res.render('register');
});

router.get('/auth/login', (req, res) => {
    res.render('login');
});



export default router;
