import z from 'zod'
import { extractValidationData } from '../common/utils/extractErrorData.js'

export const priceSchema = z.object({
    specialPrice: z.number(),
    userId: z.number().int(),
    productId: z.number().int()
})

export const validatePrice = (data) => {
    const result = priceSchema.safeParse(data)

    const {hasError, errorMessages, data: priceDataValidated} = extractValidationData(result)

    return {
        hasError,
        errorMessages,
        priceDataValidated
    }
}

export const validatePartialPrice = (data) => {
    const result = priceSchema.partial().safeParse(data)

    const { hasError, errorMessages, data: priceDataUpdatedValidated } = extractValidationData(result)

    return {
        hasError,
        errorMessages,
        priceDataUpdatedValidated
    }
}
