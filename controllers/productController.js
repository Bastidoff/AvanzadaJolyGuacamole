import { Producto } from '../models/ProductModel.js';

const formularioProducto = (req, res) => {
    res.render("product/registroProducto", {
        nombreVista: 'Producto',
    });
};


const crearProducto = async(req, res) =>{
    const producto = await Producto.create(req.body)
    res.json(producto);
    console.log(req.body);
    console.log(`Prodycto guardado correctamente`)
}

export{
    formularioProducto,
    crearProducto
}