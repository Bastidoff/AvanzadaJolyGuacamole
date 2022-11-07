import express from "express";
import {formularioProducto, crearProducto} from '../controllers/productController.js'

const productRouter = express.Router();

productRouter.get('/registroProducto', formularioProducto)
productRouter.post('/registroProducto', crearProducto)

export{
    productRouter
}