const path = require('path');
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

const multerConfig = require('./config/multer');

const server = require('http').createServer(app);
const upload = multer(multerConfig);

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '/../public')));
app.set('views', path.join(__dirname, '/../public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('index.html');
});

app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.file);
    console.log(req.body);

    res.status(201).json({});
});

app.post('/input', (req, res) => {
    const { input } = req.body;

    console.log('Input:');
    console.log(input);

    res.status(201).json({});
});

app.post('/textarea', (req, res) => {
    const { textarea } = req.body;

    console.log('Textarea:');
    console.log(textarea);

    res.status(201).json({});
});

server.listen(3000, () => {
    console.log('Server listening at 3000!');
});