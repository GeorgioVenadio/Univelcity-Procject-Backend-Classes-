const express = require('express')
const mongoose = require('mongoose')
const Pmodel = require ('./models/productModel.js')
const app = express()
app.use(express.json())
const cors =require('cors')
app.use(express.urlencoded({extended: false}))
require('dotenv').config()
const productRoute = require('./route/product.route.js')
app.use(cors())
//manages product route
app.use(process.env.APP_PRODUCT_ROUTE_URL, productRoute)

app.listen(5000,(req, res)=>{
    console.log('Server running at PORT 5000')
})

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connection sucessfull")
})
.catch(()=>{
    console.log("Connection failed")
})



// app.get(process.env.APP_PRODUCT_ROUTE_URL, async (req, res)=>{
 
// })




// app.post(process.env.APP_PRODUCT_ROUTE_URL, async (req, res)=>{
         
// })

// app.put(`${process.env.APP_PRODUCT_ROUTE_URL}/:id`, async (req, res)=>{


   
// })

// app.delete(`${process.env.APP_PRODUCT_ROUTE_URL}/:id`, async (req, res)=>{
  
// })
