import { ProductService } from "./products.service.js"


const productService = new ProductService()

export const findOneProduct = async(req, res) => {
    try {
        const { id } = req.params
        const product = await productService.findOneProduct(id)

        if(!product) {
            return res.status(404).json({
                status: "error",
                message: `Passenger with  id: ${id} not found`
            })
        }
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
        const dataProduct = req.body
        const product = await productService.createProduct(dataProduct)
        return res.status(201).json(product)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const updateProduct = async(req, res) => {
    try {
        const { id } = req.params
        const product = await productService.findOneProduct(id)

        if(!product) {
            return res.status(404).json({
                status: 'error',
                message: `Product with id: ${id} was not found`
            })
        }

        const dataProduct = req.body

        const productUpdated = await productService.updtateProduct(product, dataProduct)
        return res.status(200).json(productUpdated)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const deleteProduct = async(req, res) => {
    try {
        const { id } = req.params
        const product = await productService.findOneProduct(id)

        if(!product) {
            return res.status(404).json({
                status: 'error',
                message: `Product with id: ${id} was not found`
            })
        }

        await productService.deleteProduct(product)
        return res.status(204).json(null)
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
