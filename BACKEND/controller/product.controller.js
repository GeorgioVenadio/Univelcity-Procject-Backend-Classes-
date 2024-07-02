const Pmodel = require('../models/productModel.js');

const createProducts = async (req, res) => {
    try {
        if (!req.body.productName || !req.body.productQuantity || !req.body.productPrice) {
            return res.status(400).send({
                message: "All fields must be filled, please check again"
            })
        }

        const userProductDetails = await Pmodel.create(req.body)
        res.status(200).json(userProductDetails)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//helps to get all product
const getProducts =async (req, res) =>{
    try{
        const products = await Pmodel.find({})
        res.status(200).json({
            count: products.length,
            data: products,
            message: 'Product Fetched sucessfully'
        })
    } catch(error){
      res.status(500).json({message: 'Something went wrong on the server'})
    }
}

//helps to get a singular product
const getProduct =async (req, res) =>{
try {
    const {id} =req.params;
    const product = await Pmodel.findById(id)
    if(!product){
        return res.status(404).json({message: 'Product not found'})
    }
    res.status(200).json(product)
}catch (error) {
    res.status(500).json({message: error.message})
}
}
//helps to edit or update a product
const updateProduct =async (req, res) =>{
    try {
        const {id} = req.params
        const productIdentity = await Pmodel.findByIdAndUpdate(id, req.body,{new:true})
        if(!productIdentity){
          return res.status(404).json({message: 'Product not found'})
        }
  
    //   const updateProduct = await Pmodel.findById(id)
      res.status(200).json(productIdentity)
      } catch(error){
      res.status(500).json({message: 'Server error'})
      }
}
//helps to delete product
const deleteProduct =async (req, res) =>{
    try{
        const {id} =req.params;    
        const productId = await Pmodel.findByIdAndDelete(id)
        if(!productId){
           return res.status(404).json({message: "Unable to delete, Product not found"})
        }
        res.status(200).json({message: 'Product Deleted sucessfully'})
        } catch (error) {
          res.status(500).json({message: error.message})
        }
    
}

module.exports = {
    createProducts,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct

}
