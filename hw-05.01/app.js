const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/users', (req, res) => {

    const users = JSON.parse(fs.readFileSync('./users.json', {encoding: 'utf-8'}));

    res.render('index.hbs', {
        users
    });
});

app.listen(8080);