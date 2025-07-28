
const { FRUTASENDB } = require('../schemas/esquemaFrutas')

const postFrutasAgregar = (req, res) => {

    const frutita = { ...req.body }

    const nuevaFruta = new FRUTASENDB(frutita)


    FRUTASENDB.find({nombre : frutita.nombre})
        .then((frutaNombre) => {
            if(frutaNombre.length > 0){
                res.status(400).json({ mensaje: 'Ya existe una fruta con ese nombre' })
                console.log('\x1b[33m ############################################ \x1b[0m')
                console.log('\x1b[35m ------ Ya existe una fruta con ese nombre --- \x1b[0m')
                console.table(frutita)
                console.log('\x1b[31m Ya existe una fruta con ese nombre \x1b[0m')
                console.log('\x1b[35m ----------------------------------- \x1b[0m')
                return
            }
            console.log('\x1b[33m ############################################ \x1b[0m')
            console.log('\x1b[35m ------ Se agrego la fruta --- \x1b[0m')
            console.table(frutita)
            console.log('\x1b[32m Fruta agregada con éxito \x1b[0m')
            nuevaFruta.save()
            res.status(201).json(nuevaFruta)
            console.log('\x1b[35m ----------------------------------- \x1b[0m')
            return
        })
        .catch((error) => {
            res.status(500).json({ mensaje: 'Error al buscar la fruta / agregar fruta' })
            return console.log('\x1b[31m Error al buscar / agregar la fruta \x1b[0m', error)
        })
}

module.exports = { postFrutasAgregar }