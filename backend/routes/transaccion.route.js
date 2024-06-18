//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/transaccion.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/',transaccionCtrl.getTransacciones);
router.post('/', transaccionCtrl.createTransaccion);
router.get('/:emailCliente', transaccionCtrl.getTransaccionesCliente);
router.get('/:monedaOrigen/:monedaDestino', transaccionCtrl.getTransaccionesPorDivisas);
//router.put('/:id', productoCtrl.editProducto);
//router.delete('/:id', productoCtrl.deleteProducto);
//exportamos el modulo de rutas
module.exports = router;