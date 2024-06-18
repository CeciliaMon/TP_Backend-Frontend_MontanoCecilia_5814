const Transaccion = require('../models/transaccion');

const transaccionCtrl = {}

transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.json({
            'status': '1',
            'msg': 'Transaccion guardada.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

transaccionCtrl.getTransaccionesCliente = async (req, res) => {
    var transaccionesCliente = await Transaccion.find({ emailCliente: req.params.emailCliente });
    res.json(transaccionesCliente);
}

transaccionCtrl.getTransaccionesPorDivisas = async (req, res) => {
    var transacciones = await Transaccion.find({monedaOrigen: req.params.monedaOrigen, monedaDestino: req.params.monedaDestino});
    res.json(transacciones);
}

module.exports = transaccionCtrl;