import { Router } from "express";
import { createProduct, deleteProduct, findAllProducts, findOneProduct, findPriceByUserAndProductName, updateProduct} from "./products.contoller.js"

export const router = Router()


router
.route('/')
.get(findAllProducts)
.post(createProduct)

router
.route('/:id')
.get(findOneProduct)
.patch(updateProduct)
.delete(deleteProduct)

router.get('/price/:userId/:productName', findPriceByUserAndProductName);
