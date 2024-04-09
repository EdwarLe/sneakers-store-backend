import { SpecialPriceService } from "./price.service.js"


const specialPriceService = new SpecialPriceService()

export const validateExistPrice = async(req, res, next) => {
    const { id } = req.params

    const specialPrice = await specialPriceService.findOneSpecialPrice(id)

    if(!specialPrice) {
        return res.status(404).json({
            status: 'error',
            message: `The price with id: ${id} was not found`
        })
    }


    req.specialPrice = specialPrice

    next()
}