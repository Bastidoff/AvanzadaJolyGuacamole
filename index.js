import express from 'express';
import path from 'path';
import { clientRouter} from "./routes/clientRouter.js";
import { productRouter } from './routes/productoRouter.js';
import { dataBase } from "./config/dataBase.js";

const app = express()
app.use(express.urlencoded({extended:true}))

const puerto = 4000

try {
    await dataBase.authenticate()
    dataBase.sync()
    console.log('Conexión exitosa a la base de datos')
  } catch (error) {
    console.log(error)
  }

app.use(clientRouter)
app.use(productRouter)
app.set('view engine', 'pug')
app.set('views', './views')

// Levantando el servidor en el peurto con la funcion lister de express
app.listen(puerto, ()=>{
  console.log(`Servidor corriendo en el puerto ${puerto}`)
})