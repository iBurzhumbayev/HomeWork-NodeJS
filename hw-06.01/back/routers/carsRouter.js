const express = require('express');
const fs = require('fs');
const router = express.Router();

router.post('/', (req, res) => {
    const {model, year, src} = req.body;

    const componentsArray = JSON.parse(fs.readFileSync('./cars.json'));
    const newComponent = {
        id: componentsArray.at(-1)?.id + 1 || 1,
        model,
        year,
        src
    };

    fs.writeFileSync('./cars.json', JSON.stringify([...componentsArray, newComponent]));
    res.status(201).send('ok');
});

router.get('/', (req, res) => {
    let cars = JSON.parse(fs.readFileSync('./cars.json', {encoding: 'utf-8'}) || '[]');

    res.render('page.hbs', {
        cars
    });
});

module.exports = router;