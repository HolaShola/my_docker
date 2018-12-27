const express = require('express')

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send("Let's start learning!");
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);