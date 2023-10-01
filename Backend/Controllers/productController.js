const Razorpay = require('razorpay')
const crypto = require('crypto')
const payment = require('../Models/paymentModel')
const createOrder = (req, res, next) => {
    try {
        console.log(req.body)
        const data = req.body
        console.log(data)
        res.json({
            data: data
        })
    } catch (err) {
        next(err)
    }
}

const getorderId = async (req, res, next) => {
    try {

        const { price } = req.body
        const instance = new Razorpay({ key_id: process.env.RAZORPAY_API_KEY, key_secret: process.env.RAZORPAY_API_SECRET })

        const response = await instance.orders.create({
            amount: Number(price*100),
            currency: "INR",
        })

        console.log(response.id);
        res.json({
            orderId: response.id
        })

    } catch (err) {
        next(err)
    }
}

const deleteProduct = (req, res, next) => {
    try {
        // console.log('product added')
        res.json({
            message: 'added'
        })
    } catch (err) {
        next(err)
    }
}

const paymentVerification = async (req, res, next) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body

    
    console.log(razorpay_payment_id);
    console.log(razorpay_order_id)
    console.log(razorpay_signature)

    const body = `${razorpay_order_id}|${razorpay_payment_id}`;

    try{
        const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_API_SECRET).update(body).digest("hex");



    const isAuthentic = expectedSignature === razorpay_signature;

    console.log(isAuthentic)


    if (isAuthentic) {
        await payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        })
    }
    res.redirect(`http://localhost:3000/SuccessPage?reference=${razorpay_payment_id}`);

    }catch(err){
        next(err);
    }
}

module.exports = { createOrder, deleteProduct, getorderId, paymentVerification }