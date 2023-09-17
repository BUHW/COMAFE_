const express = require('express');
const app = express();
const port = 8090;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const servidor = path.join(__dirname, '/catalogo')

app.get('/', express.static(servidor));

app.get('/catalogo', async function (req, res) {
    res.render(path.join(servidor, 'catalogo.html'));
});

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/catalogo/style.css');
});
  
  app.get('/app.js', (req, res) => {
    res.sendFile(__dirname + '/catalogo/app.js');
});

app.listen(port, () =>{ 
    console.log('Servidor funfando legal');
});