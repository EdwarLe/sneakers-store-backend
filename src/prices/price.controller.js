import { ProductService } from "../products/products.service.js"
import { UserService } from "../users/users.service.js"
import { toLower } from "../common/utils/utils.js"
import { validatePartialPrice, validatePrice } from "./price.schema.js"
import { SpecialPriceService } from "./price.service.js"

const specialPriceService = new SpecialPriceService()
const userService = new UserService()
const productService = new ProductService()

export const createSpecialPrice = async(req, res) => {
    try {
        const { hasError, errorMessages, priceDataValidated } = validatePrice(req.body)
        
        if(hasError) {
            return res.status(422).json({
                status: 'error',
                message: errorMessages
            })
        }
        const specialPrice = await specialPriceService.createSpecialPrices(priceDataValidated)
        return res.status(201).json(specialPrice)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const findAllSpecialPrices = async(req, res) => {
    try {
        const specialPrices = await specialPriceService.findAllSpecialPrices()
        return res.status(200).json(specialPrices)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const findOneSpecialPrice = async(req, res) => {
    try {
        const { specialPrice } = req
        return res.status(200).json(specialPrice)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const updateSpecialPrice = async(req, res) => {
    try {
        const { hasError, errorMessages, priceDataUpdatedValidated } = validatePartialPrice(req.body)

        if(hasError) {
            return res.status(422).json({
                status: 'error',
                message: errorMessages
            })
        }
        const { specialPrice } = req
        
        const specialPriceUpdated = await specialPriceService.updateSpecialPrice(specialPrice, priceDataUpdatedValidated)
        return res.status(200).json(specialPriceUpdated)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const deleteSpecialPrice = async(req, res) => {
    try {
        const { specialPrice } = req
        
        await specialPriceService.deleteSpecialPrice(specialPrice)
        return res.status(204).json(null)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const specialPriceByClient = async(req, res) => {
    const { userId, productName } = req.params
    const toLowerProductName = toLower(productName)
    const findUser = await userService.findOneUser(userId)
    const findProduct = await productService.findOneProductByname(toLowerProductName)
    const isMember = findUser.member
    const isSpecialPrice = findProduct.isSpecialPrice

    
    if(!findUser) {
        return res.status(404).json({
            status: 'error',
            message: `User with id ${findUser} was not found`
        })
    }
    
    if(!findProduct) {
        return res.status(404).json({
            status: 'error',
            message: `Product with name ${findProduct} was not found`
        })
    }

    if(isMember && isSpecialPrice) {
        const findSpecialPrice = await specialPriceService.findByProductId(findProduct.id)
        if(!findSpecialPrice) {
            return res.status(404).json({
                status: 'error',
                message: `Price with product id ${findSpecialPrice} was not found`
            })
        }
        const addSpecialPrice = await productService.updtateProduct(findProduct, { specialPrice: findSpecialPrice.specialPrice, userId: userId })
        return res.status(200).json(addSpecialPrice)
    } else {
        const productNoSpecialPrice = await productService.updtateProduct(findProduct, { userId: userId })
        return res.status(200).json(productNoSpecialPrice)
    }

    
}