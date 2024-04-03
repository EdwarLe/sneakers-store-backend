import SpecialPrice from "./price.model.js";

export class SpecialPriceService {
    async findAllSpecialPrices () {
        return await SpecialPrice.findAll({
            where: {
                status: true
            }
        })
    }

    async findOneSpecialPrice (id) {
        return await SpecialPrice.findOne({
            where: {
                id,
            }
        })
    }

    async findByProductId (productId) {
        return await SpecialPrice.findOne({
            where: {
                productId
            }
        })
    }

    async createSpecialPrices (data) {
        return await SpecialPrice.create(data)
    }

    async updateSpecialPrice (specialPrice, data) {
        return await specialPrice.update(data)
    }

    async deleteSpecialPrice (specialPrice) {
        return await specialPrice.update({status: false})
    }
}