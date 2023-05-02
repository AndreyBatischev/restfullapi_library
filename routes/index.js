import { Router } from 'express';
const router = Router();

// Главная страница
router.get('/', (req, res) => {
    res.render('index', { user: req.user });
});

router.get('/add', (req, res) => {
    res.render('add-book');
});



export default router;
