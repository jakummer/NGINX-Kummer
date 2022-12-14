const express = require('express');

const app = express();

app.use(express.static('public'));

const PORT = parseInt(process.argv[2]) || 8080;

app.get('/api/randoms', (req, res) => {
    console.log( `La app se está conectando al servidor express Nginx en: ${PORT} :: ${Date.now()}`);
    res.send(`La app se está conectando al servidor express Nginx en ${PORT}`);

});

app.get('/test', (req, res) => {
    console.log(`Hacemos test en Port: ${PORT} :: ${Date.now()}`);
    res.send(`Hacemos test Servidor express Nginx en ${PORT}`);
});


app.listen(PORT);

