const mongoose = require('mongoose')

const Product = mongoose.Schema({
    name : {
        type : String,
    },
})


const product = mongoose.model('product',Product);

module.exports = product