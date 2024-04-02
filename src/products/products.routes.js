import { Router } from "express";
import { createProduct, findAllProducts, findPriceByUserAndProductName} from "./products.contoller.js"

export const router = Router()


router.post('/products', createProduct)

router.get('/products', findAllProducts)


router.get('/price/:userId/:productName', findPriceByUserAndProductName);

