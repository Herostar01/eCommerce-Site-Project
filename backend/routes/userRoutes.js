import express from 'express'
const router = express.Router()

import {authUser} from '../controllers/userController.js'



// Gets all products from database
// @desc Get all products
// @route GET /api/products
// @access Public

router.post('/login', authUser)



export default router 