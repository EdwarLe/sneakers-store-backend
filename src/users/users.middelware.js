import { UserService } from "./users.service.js"


const userService = new UserService()

export const validateExistUser = async( req, res, next) => {
    const { id } = req.params
        const user = await userService.findOneUser(id)
        if(!user) {
            return res.status(404).json({
                status: 'error',
                message: `User with id: ${id} was not found`
            })
        }

    req.user = user
    next()
}