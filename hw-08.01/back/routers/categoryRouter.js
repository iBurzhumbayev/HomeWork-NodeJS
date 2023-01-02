const express = require('express');
const fs = require('fs');
const router = express.Router();
const {CATEGORY_FILE_PATH} = require('../utils.js');

router.post('/', (req, res) => {
    const {name} = req.body;

    const categoryArray = JSON.parse(fs.readFileSync(CATEGORY_FILE_PATH));
    const newCategory = {
        id: categoryArray.at(-1)?.id + 1 || 1,
        name
    };

    fs.writeFileSync(CATEGORY_FILE_PATH, JSON.stringify([...categoryArray, newCategory]));
    res.status(201).send('ok');
});

router.get('/', (req, res) => {
    let {name} = req.query;
    name = name ? name.toLowerCase() : '';

    let category = JSON.parse(fs.readFileSync(CATEGORY_FILE_PATH, {encoding: 'utf-8'}));

    if (name) {
        category = category.filter(e => e.name.toLowerCase().includes(name));
    }

    res.send(category)
});

module.exports = router;