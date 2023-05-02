import express, { urlencoded, json } from 'express';
import { connect } from 'mongoose';
import routes from './routes/index.js';
import bookRoutes from './routes/bookRoutes.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DB_URL = 'mongodb+srv://user:user123qwe@restapi.gbi9szb.mongodb.net/?retryWrites=true&w=majority';

// Подключение к MongoDB

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

// Настройка маршрутов
app.use('/', routes);
app.use('/api', bookRoutes);


// Настройка EJS для фронтенда
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

const PORT = process.env.PORT || 3000;

async function startApp() {
    try {
        await connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => { console.log(`Server is runnign on PORT: ${PORT}`) })
    } catch (error) {
        console.log(error);
    }
}

startApp()