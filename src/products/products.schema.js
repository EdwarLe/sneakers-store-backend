import z from 'zod'
import { extractValidationData } from '../common/utils/extractErrorData.js'

export const productSchema = z.object({
    productName: z.string(),
    brand: z.string(),
    price: z.number(),
    specialPrice: z.number(),
    userId: z.number().int(),
    isSpecialPrice: z.boolean(),
    stock: z.boolean()
})

export const validateProduct = (data) => {
    const result = productSchema.safeParse(data)

    const { hasError, errorMessages, data: productValidated } = extractValidationData(result)

    return {
        hasError,
        errorMessages,
        productValidated
    }
}

export const validatePartialProduct = (data) => {
    const result = productSchema.partial().safeParse(data)

    const {hasError, errorMessages, data: productUpdatedValidated} = extractValidationData(result)

    return {
        hasError,
        errorMessages, productUpdatedValidated
    }
}