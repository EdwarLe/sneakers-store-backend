import { ProductService } from "./products.service.js"


const productService = new ProductService()

export const findAllProducts = async(req, res) => {
    try {
        const products =  await productService.findAllProducts()
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const createProduct = async(req, res) => {
    try {
        const dataProduct = req.body
        const product = await productService.createProduct(dataProduct)
        return res.status(201).json(product)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const findPriceByUserAndProductName = (req, res) => {
    const {userId, productName} = req.params
    res.json({
        message:`Este endpoint obtendrá un usuario con id: ${userId} y una sneaker de marca ${productName}`
    })
}
