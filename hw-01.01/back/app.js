const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routers/usersRouter');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

app.use('/users', (req, res, next) => {
    if (5 > 3) {
    next();
    } else {
        res.send('У Вас нет доступа')
    }
})

app.use('/users', usersRouter);


app.listen(8080, () => {
    console.log('Server started!');
});