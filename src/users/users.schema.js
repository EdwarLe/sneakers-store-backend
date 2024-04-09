import z from 'zod'
import { extractValidationData } from '../common/utils/extractErrorData.js'

export const userSchema = z.object({
    name: z.string(),
    surname: z.string(),
    member: z.boolean()
})

export const validateUser = (data) => {
    const result = userSchema.safeParse(data)

    const { hasError, errorMessages, data: userValidated} = extractValidationData(result)

    return {
        hasError,
        errorMessages,
        userValidated
    }
}

export const validatePartialUser = (data) => {
    const result = userSchema.partial().safeParse(data)

    const { hasError, errorMessages, data: userUpdatedValidated} = extractValidationData(result)

    return {
        hasError,
        errorMessages,
        userUpdatedValidated
    }

}