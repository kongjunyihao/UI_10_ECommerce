/*
    server.js used to connect to the mongodb and create root uri
    router-app.js used to create sub uri and use method: get, post, delete, and put
    models used create schema of data tables
    install packages:
        node, express, express mongodb, jsonwebtoken, multer
        all use npm install
*/

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
// const routerURI = require('./router-app')
const routerBuyer = require('./router-buyer')
const routerProduct = require('./router-product')
const routerCart = require('./router-cart')
// const draftURI = require('./modules/uploadDraft/DraftRouter')

// const uri = "mongodb+srv://Sean_cluster:Xtx199284=@e-commerce.xyeoe40.mongodb.net/?retryWrites=true&w=majority"
const uri = "mongodb+srv://YanyuLi:lyy123456@cluster0.vf6ovwt.mongodb.net/?retryWrites=true&w=majority"

async function connect(){
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(uri)
        console.log('Connected to MongoDB')
    } catch(error){
        console.error(error)
    }
}

connect()

//express middleware
app.use(cors())
app.use(express.json())
// app.use('/app', routerURI)
app.use('/app', routerProduct)
app.use('/app', routerBuyer)
app.use('/app', routerCart)
app.use('uploads', express.static('uploads'))
// app.use('/app', draftURI)

//listener
app.listen(4000, ()=>{
    console.log('Server started on port 4000')
})