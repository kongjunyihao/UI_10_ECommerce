const express = require('express')
const router = express.Router()

const cartInfoTemplateCopy = require('./models/CartModels')

//get cart by buyer email
router.post('/cart', async (req, res)=>{
    let email = req.body.email
    let result = await cartInfoTemplateCopy.findOne({email: email}).exec()
    res.json(result)
})

//add items into cart
router.post('/cart/add', async (req, res)=>{
    let email = req.body.email
    let productID = req.body.productID
    let result = await cartInfoTemplateCopy.findOne({email: email}).exec()
    let targetItem = result.products.find(product => product.productID === productID)
    if(targetItem) targetItem.quantity += 1
    else result.products.push({productID:productID,quantity:1})
    await result.save()
    res.json(result)
})

//cut items in cart
router.post('/cart/minus', async (req, res)=>{
    let email = req.body.email
    let productID = req.body.productID
    let result = await cartInfoTemplateCopy.findOne({email: email}).exec()
    let targetItem = result.products.find(product => product.productID === productID)
    if (targetItem.quantity === 1) return
    else targetItem.quantity -= 1
    await result.save()
    res.json(result)
})

//remove items from cart
router.post('/cart/delete', async (req, res)=>{
    let email = req.body.email
    let productID = req.body.productID
    let result = await cartInfoTemplateCopy.findOne({email: email}).exec()
    result.products = result.products.filter(product=> product.productID !== productID)
    await result.save()
    res.json(result)
})

module.exports = router