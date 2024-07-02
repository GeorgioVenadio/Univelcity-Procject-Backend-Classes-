const express = require('express')
const router = express.Router()
const {
    createProducts,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require('../controller/product.controller.js')

router.get('/', getProducts)
router.post('/', createProducts)
router.get('/:id', getProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router
