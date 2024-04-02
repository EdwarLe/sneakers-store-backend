import Product from "./products.model.js"

export class ProductService {
    async findOneProduct () {

    }

    async findAllProducts () {
        return await Product.findAll()
    }

    async createProduct (data) {
        return await Product.create(data)
    }
}