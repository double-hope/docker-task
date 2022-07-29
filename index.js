import express from 'express'
import path from 'path';

const __dirname = path.resolve();
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'src', 'html'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/hi-academy', (req, res) => {
    res.render('hi-academy');
})

app.use(express.static(path.resolve(__dirname, 'src', 'html', 'static')));

app.listen(PORT);
