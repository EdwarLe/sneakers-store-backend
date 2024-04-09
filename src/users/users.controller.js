import { validatePartialUser, validateUser } from "./users.schema.js"
import { UserService } from "./users.service.js"

const userService = new UserService()

export const createUser = async(req, res) => {
    try {
        const { hasError, errorMessages, userValidated } = validateUser(req.body)
        if(hasError) {
            return res.status(422).json({
                status: 'error',
                message: errorMessages
            })
        }
        const user = await userService.createUser(userValidated)
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const findAllUsers = async(req, res) => {
    try {
        const users = await userService.findAllUsers()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const findOneUser = async(req, res) => {
    try {
        const { user } = req

        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const updateUser = async(req, res) => {
    try {
        const { hasError, errorMessages, userUpdatedValidated } = validatePartialUser(req.body)
        if(hasError) {
            return res.status(422).json({
                status: 'error',
                message: errorMessages
            })
        }
        const { user } = req

        const userUpdated = await userService.updateUser(user, userUpdatedValidated)
        return res.status(200).json(userUpdated)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const deleteUser = async(req, res) => {
    try {
        const { user } = req
        
        await userService.deleteUser(user)
        return res.status(204).json(null)
    } catch (error) {
        return res.status(500).json(error)
    }
}