import { Router } from "express";
import { createSpecialPrice, deleteSpecialPrice, findAllSpecialPrices, findOneSpecialPrice, specialPriceByClient, updateSpecialPrice } from "./price.controller.js";
import { validateExistPrice } from "./price.middleware.js";

export const router = Router()

router
.route('/')
.get(findAllSpecialPrices)
.post(createSpecialPrice)

router
.route('/:id')
.get(validateExistPrice, findOneSpecialPrice)
.patch(validateExistPrice, updateSpecialPrice)
.delete(validateExistPrice, deleteSpecialPrice)

router.get('/:userId/:productName', specialPriceByClient);
