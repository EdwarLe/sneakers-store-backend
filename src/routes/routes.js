import { Router } from "express";
import { router as productRouter } from '../products/products.routes.js'
import { router as userRouter } from '../users/users.routes.js'

export const router = Router()

router.use('/products', productRouter)
router.use('/users', userRouter)