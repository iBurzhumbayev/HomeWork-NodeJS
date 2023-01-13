const mongoose = require('mongoose');
const { PhoneSchema } = require('./schemas');

const PhoneModel = mongoose.model('Phone', PhoneSchema);

module.exports = {
    PhoneModel
};