import { Cliente } from '../models/ClientModel.js';

const formularioCliente = (req, res) => {
    res.render("client/registroCliente", {
        nombreVista: 'Cliente',
    });
};


const crearCliente = async(req, res) =>{
    const cliente = await Cliente.create(req.body)
    res.json(cliente);
    console.log(req.body);
    console.log(`Cliente guardado correctamente`)
}

export{
    formularioCliente,
    crearCliente
}