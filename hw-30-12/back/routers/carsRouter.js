const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/', (req, res) => {
    res.send(fs.readFileSync('./routers/cars.json', {encoding: 'utf-8'}));
});

router.get('/:id', (req, res) => {
    const id = +req.params.id
    const carsArray = JSON.parse(fs.readFileSync('./routers/cars.json', {encoding: 'utf-8'}));
    const car = carsArray.find(car => car.id === id);
    res.send(car);
});

router.post('/', (req, res) => {
    const carsArray = JSON.parse(fs.readFileSync('./routers/cars.json', {encoding: 'utf-8'}));
    fs.writeFileSync("./routers/cars.json", JSON.stringify([...carsArray, {id: carsArray.at(-1)?.id + 1 || 1, model: req.body.model}]));
    res.send('Car added!');
});

router.delete('/', (req, res) => {
    const carsArray = JSON.parse(fs.readFileSync('./routers/cars.json', {encoding: 'utf-8'}));
    fs.writeFileSync('./routers/cars.json', JSON.stringify(carsArray.splice(0, 0)));
    res.send('Cars deleted!')
});

router.delete('/:id', (req, res) => {
    const id = +req.params.id;
    const carsArray = JSON.parse(fs.readFileSync('./routers/cars.json', {encoding: 'utf-8'}));
    fs.writeFileSync('./routers/cars.json', JSON.stringify(carsArray.filter(car => car.id !== id)));
    res.send('Car deleted!')
});


router.put('/', (req, res) => {
    const {id, model} = req.body;
    const carsArray = JSON.parse(fs.readFileSync('./routers/cars.json', {encoding: 'utf-8'}));
    carIndex = carsArray.findIndex(item => item.id === +id);
    carsArray[carIndex].model = model;
    fs.writeFileSync('./routers/cars.json', JSON.stringify(carsArray));
    res.send('ok');
});

module.exports = router;