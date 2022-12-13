const express = require('express');

const app = express();

app.use(express.static('public'));

const PORT = parseInt(process.argv[2]) || 8080;

app.get('/api/random', (req, res) => {
    console.log( `La app se está conectando al servidor express Nginx en: ${PORT} :: ${Date.now()}`);
    res.send(`La app se está conectando al servidor express Nginx en ${PORT}`);

});

app.get('/test', (req, res) => {
    console.log(`test Port: ${PORT} -> FyH: ${Date.now()}`);
    res.send(`test Servidor express Nginx en ${PORT}`);
});


app.listen(PORT);

// pm2 start server.js --name="Server1" --watch -- 8081
// pm2 start server.js --name="Server2" --watch -i max -- 8082