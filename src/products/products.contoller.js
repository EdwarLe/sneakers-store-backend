import { validatePartialProduct, validateProduct } from "./products.schema.js"
import { ProductService } from "./products.service.js"


const productService = new ProductService()

export const findOneProductById = async(req, res) => {
    try {
        const { product } = req
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json(error)
    }
}

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
        const { hasError, errorMessages, productValidated } = validateProduct(req.body)

       if(hasError) {
        return res.status(422).json({
            status: 'error',
            message: errorMessages
        })
       }
        const product = await productService.createProduct(productValidated)
        return res.status(201).json(product)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const updateProduct = async(req, res) => {
    try {
        const { hasError, errorMessages, productUpdatedValidated} = validatePartialProduct(req.body)
        if(hasError) {
            return res.status(422).json({
                status: 'error',
                message: errorMessages
            })
        }
        const { product } = req
        const productUpdated = await productService.updtateProduct(product, productUpdatedValidated)
        return res.status(200).json(productUpdated)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const deleteProduct = async(req, res) => {
    try {
        const { product } = req

        await productService.deleteProduct(product)
        return res.status(204).json(null)
    } catch (error) {
        return res.status(500).json(error)
    }
}


