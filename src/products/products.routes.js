import { Router } from "express";
import { createProduct, deleteProduct, findAllProducts, findOneProductById, updateProduct} from "./products.contoller.js"

export const router = Router()


router
.route('/')
.get(findAllProducts)
.post(createProduct)

router
.route('/:id')
.get(findOneProductById)
.patch(updateProduct)
.delete(deleteProduct)

