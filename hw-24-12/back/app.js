const express = require('express');
const bodyParser = require('body-parser');
const carsRouter = require('./routers/carsRouter');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

app.use('/cars', (req, res, next) => {
    if (5 > 3) {
    next();
    } else {
        res.send('У Вас нет доступа')
    }
})

app.use('/cars', carsRouter);


app.listen(8080, () => {
    console.log('Server started!');
});