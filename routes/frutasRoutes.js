const express = require('express')

const { getFrutas } = require('../controllers/frutasTodas')

const { appRaiz } = require('../controllers/appRaiz')

const { getFrutasPorNombre } = require('../controllers/frutaPorNombre')

const { getFrutasPorImporte } = require('../controllers/frutasPorImporte')

const { postFrutasAgregar } = require('../controllers/frutasAgregar')

const { validarFormatoFrutas } = require('../middlewares/validarNuevaFruta')

const { patchFrutasEditar } = require('../controllers/frutasEditar')

const { deleteFrutasEliminar } = require('../controllers/frutasEliminar')

const router = express.Router()

router.get('/', appRaiz)
router.get('/frutastodas', getFrutas)
router.get('/frutas/nombre/:nombre', getFrutasPorNombre)
router.get('/frutas/importe/:importe', getFrutasPorImporte)
router.post('/frutas/agregar/',validarFormatoFrutas, postFrutasAgregar)
router.patch('/frutas/editar/:id', validarFormatoFrutas, patchFrutasEditar)
router.delete('/frutas/eliminar/:id', deleteFrutasEliminar)

module.exports = { router }