//defino controlador para el manejo de CRUD
const ticketCtrl = require('./../controllers/ticket.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', ticketCtrl.getTickets);
router.post('/', ticketCtrl.createTicket);
router.get('/:id', ticketCtrl.getTicket);
router.get('/:categoriaEspectador', ticketCtrl.getTicketsCategoria);
router.put('/:id', ticketCtrl.editTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
//exportamos el modulo de rutas
module.exports = router;