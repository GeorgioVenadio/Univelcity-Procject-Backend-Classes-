const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        productName: {
         type: String,
         required: true
        },
        productQuantity: {
            type: Number,
            required:true
        },
        productPrice: {
            type: Number,
            required: true
        },
        
    },

    {
        timestamps: true

    }
    
       
         

)

const ProductList = mongoose.model('productList', ProductSchema)
module.exports =ProductList;