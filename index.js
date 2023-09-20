const express = require('express');
const hostname = '192.168.300.02';
const app = express();
const port = 8090;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const servidor = path.join(__dirname, '/views');


app.use('/img', express.static(path.join(__dirname + '/img')));
app.use(express.static(servidor));

app.get('/', (req, res) => {
    res.sendFile(path.join(servidor, 'landingPage/index.html'));
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(servidor, 'landingPage/style.css'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(servidor, 'landingPage/script.js'));
});

app.get('/img', (req, res) => {
    res.sendFile(path.join(__dirname, '/img'));
});

app.listen(port, () =>{ 
    console.log(`Servidor funfando legal no http://${hostname}:${port}`);
});
