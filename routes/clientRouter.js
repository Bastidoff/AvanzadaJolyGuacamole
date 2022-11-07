import express from "express";
import {formularioCliente, crearCliente} from '../controllers/clientController.js'

const clientRouter = express.Router();

clientRouter.get('/registroCliente', formularioCliente)
clientRouter.post('/registroCliente', crearCliente)

export{
    clientRouter
}