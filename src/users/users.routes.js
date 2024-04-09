import { Router } from "express";
import { createUser, findOneUser, findAllUsers, updateUser, deleteUser } from "./users.controller.js";
import { validateExistUser } from "./users.middelware.js";

export const router = Router()

router
.route('/')
.get(findAllUsers)
.post(createUser)

router
.route('/:id')
.get(validateExistUser, findOneUser)
.patch(validateExistUser, updateUser)
.delete(validateExistUser, deleteUser)
