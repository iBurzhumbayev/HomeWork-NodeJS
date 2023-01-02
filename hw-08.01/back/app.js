const express = require('express');
const bodyParser = require('body-parser');
const categoryRouter = require('./routers/categoryRouter');
const productsRouter = require('./routers/productsRouter');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/category', categoryRouter);
app.use('/products', productsRouter);

app.listen(8080);