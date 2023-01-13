const express = require('express');
const { PhoneModel } = require('../Models')
const router = express.Router();

router.get('/', (req, res) => {
    const model = req.query.model;
    if (model) {
        PhoneModel.find({ model: `${model}` }, (err, results) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(results)
            }
        })
    } else {
        PhoneModel.find({}, (err, results) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        });
    }
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    PhoneModel.findByIdAndDelete(id, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("deleted");
        }
    });
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    PhoneModel.findById(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    });
});

router.post('/', (req, res) => {
    const {model, price, color} = req.body;
    const newPhone = new PhoneModel({model, price, color});
    newPhone.save((err) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send('ok');
        }
    });
});

router.put("/:id", async (req, res) => {
    const {id} = req.params
    const { model, price, color } = req.body;
    await PhoneModel.findByIdAndUpdate(id,{model, price, color})
    res.send("updated");
});

module.exports = router;