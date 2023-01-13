const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const phonesRouter = require('./routers/phonesRouter');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb+srv://admin:admin@cluster0.7rqq8rd.mongodb.net/?retryWrites=true&w=majority', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('server started');
        app.use('/phones', phonesRouter);
        app.listen(8080);
    }
});


