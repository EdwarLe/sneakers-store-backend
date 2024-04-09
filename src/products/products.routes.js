import { Router } from "express";
import { createProduct, deleteProduct, findAllProducts, findOneProductById, updateProduct} from "./products.contoller.js"
import { validateExistProduct } from "./products.middleware.js";

export const router = Router()


router
.route('/')
.get(findAllProducts)
.post(createProduct)

router
.route('/:id')
.get(validateExistProduct, findOneProductById)
.patch(validateExistProduct, updateProduct)
.delete(validateExistProduct, deleteProduct)

