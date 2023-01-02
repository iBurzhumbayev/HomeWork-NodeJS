const express = require('express');
const fs = require('fs');
const router = express.Router();
const {PRODUCTS_FILE_PATH} = require('../utils.js');

router.post('/', (req, res) => {
    const {name, price, categoryId} = req.body;

    const products = JSON.parse(fs.readFileSync(PRODUCTS_FILE_PATH));
    const newProduct = {
        id: products.at(-1)?.id + 1 || 1,
        name,
        price,
        categoryId
    };

    fs.writeFileSync(PRODUCTS_FILE_PATH, JSON.stringify([...products, newProduct]));
    res.status(201).send('ok');
});

router.get('/', (req, res) => {
    let {categoryId} = req.query;
    categoryId = categoryId ? categoryId.toLowerCase() : '';

    let products = JSON.parse(fs.readFileSync(PRODUCTS_FILE_PATH, {encoding: 'utf-8'}));

    if (categoryId) {
        products = products.filter(product => product.categoryId.toLowerCase().includes(categoryId));
    }

    res.send(products)
});

module.exports = router;