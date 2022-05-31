const express = require('express');
const router = express.Router();

const {getClientes,getProductos, getFacturas, getPedidos, createCliente,getClienteByID, crearProducto, getClientePedido, crearFactura,crearPedido} = require('../controllers/api.controller');

const usuario = {
    nombre:'Juan',
    apellido:'salazar'
}

router.get('/',getClientes);
router.get('/cliente/:id',getClienteByID);
router.get('/productos',getProductos);
router.get('/facturas',getFacturas);
router.get('/pedidos',getPedidos);
router.get('/pedidocliente',getClientePedido);

router.post('/crearcliente',createCliente);

router.post('/crearproducto',crearProducto);

router.post('/crearfactura',crearFactura);

router.post('/crearpedido',crearPedido);






  



module.exports = router;