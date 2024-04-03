import { toLower } from "../utils/utils.js"
import Product from "./products.model.js"

export class ProductService {
    async findOneProductById (id) {
        return await Product.findOne({
            where:{
                id,
                stock: true
            }
        })
    }

    async findOneProductByname (name) {
        return await Product.findOne({
            where:{
                'brand': name,
                stock: true
            }
        })
    }

    async findAllProducts () {
        return await Product.findAll({
            where: {
                stock: true
            }
        })
    }

    async createProduct (data) {
        const brandToLower = toLower(data.brand)
        const product = await Product.create(data)
        const productBrandUpdated = await product.update({ brand: brandToLower})
        return productBrandUpdated
    }

    async updtateProduct (product, data) {
        return await product.update(data)
    }

    async deleteProduct (product) {
        return await product.update({ status: false})
    }
}