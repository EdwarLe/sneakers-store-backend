import { ProductService } from "./products.service.js"


const productService = new ProductService()

export const validateExistProduct = async(req, res, next) => {
    const { id } = req.params

    const product = await productService.findOneProductById(id)

        if(!product) {
            return res.status(404).json({
                status: "error",
                message: `Passenger with  id: ${id} not found`
            })
        }

    req.product = product

    next()
}