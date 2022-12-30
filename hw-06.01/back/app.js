const express = require('express');
const bodyParser = require('body-parser');
const carsRouter = require('./routers/carsRouter');
const cors = require('cors');
const app = express();

app.use(express.static(__dirname + '/public'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'hbs');

app.use('/page', carsRouter);

app.listen(8080);