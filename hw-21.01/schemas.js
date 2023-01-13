const { Schema } = require('mongoose');

const PhoneSchema = new Schema({
    model: String,
    price: Number,
    color: String
});

module.exports = {
    PhoneSchema
};