const express = require('express')
const {createOrder,deleteProduct,getorderId, paymentVerification} = require('../Controllers/productController')
const routes = express.Router();

routes.post('/createOrder' , createOrder)
routes.post('/getorderId' , getorderId)
routes.post('/paymentVerification' , paymentVerification)

module.exports =  routes