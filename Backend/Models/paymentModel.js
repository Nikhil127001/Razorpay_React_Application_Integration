const mongoose = require('mongoose')


const Payment = mongoose.Schema({
    razorpay_order_id : {
        type : String
    },
    razorpay_payment_id : {
        type : String
    },
    razorpay_signature : {
        type : String
    },
})


const payment = mongoose.model("payment" , Payment)

module.exports = payment;