import { Router } from "express";
import { createSpecialPrice, deleteSpecialPrice, findAllSpecialPrices, findOneSpecialPrice, specialPriceByClient, updateSpecialPrice } from "./price.controller.js";

export const router = Router()

router
.route('/')
.get(findAllSpecialPrices)
.post(createSpecialPrice)

router
.route('/:id')
.get(findOneSpecialPrice)
.patch(updateSpecialPrice)
.delete(deleteSpecialPrice)

router.get('/:userId/:productName', specialPriceByClient);
