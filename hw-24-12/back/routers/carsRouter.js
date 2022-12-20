const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.send(fs.readFileSync('./routers/cars.json', {encoding: 'utf-8'}));
});

router.get('/:id', (req, res) => {
    const id = +req.params.id
    const carsArray = JSON.parse(fs.readFileSync('./routers/cars.json', {encoding: 'utf-8'}));
    const car = carsArray.find(user => user.id === id);
    res.send(car);
});

router.post('/', (req, res) => {
    const carsArray = JSON.parse(fs.readFileSync('./routers/cars.json', {encoding: 'utf-8'}));
    carsArray.push({id: carsArray.length+1, model: req.body.model});
    fs.writeFileSync('./routers/cars.json', JSON.stringify(carsArray));
    res.send('car added!');
});

module.exports = router;