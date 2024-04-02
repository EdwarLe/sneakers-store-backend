import Product from "./products.model.js"

export class ProductService {
    async findOneProduct (id) {
        return await Product.findOne({
            where:{
                id,
                status: true
            }
        })
    }

    async findAllProducts () {
        return await Product.findAll({
            where: {
                status: true
            }
        })
    }

    async createProduct (data) {
        return await Product.create(data)
    }

    async updtateProduct (product, data) {
        return await product.update(data)
    }

    async deleteProduct (product) {
        return await product.update({ status: false})
    }
}