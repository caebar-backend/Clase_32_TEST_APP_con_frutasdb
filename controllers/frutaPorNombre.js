const { FRUTASENDB } = require('../schemas/esquemaFrutas')

let frutaCopia = []

const getFrutasPorNombre = (req, res) => {
    const { nombre } = req.params

   FRUTASENDB.find({nombre : {$regex : nombre , $options : "i"}})
    .then((frutaNombre)=> {
     if(!frutaNombre || frutaNombre.length === 0){
        console.log('\x1b[31m No se pudo encontrar la fruta \x1b[0m')
        return res.status(404).json({ mensaje: 'No existe fruta con ese nombre' })
     }

     frutaNombre.forEach((f) => {
        frutaCopia.push({
            id: f.id,
            imagen: f.imagen,
            nombre: f.nombre,
            precio: f.precio
        })
     })
     
     console.log('\x1b[33m ############################################ \x1b[0m')
     console.log('\x1b[35m ------ Se obtuvieron la/s fruta/s por nombre ----- \x1b[0m')
     console.table(frutaCopia)
     console.log('\x1b[35m ----------------------------------- \x1b[0m')
     res.status(200).json(frutaNombre)
     return
    })
    .catch((error) => {
         console.log('\x1b[31m Error al obtener la fruta \x1b[0m', error)
         res.status(500).json({ mensaje: 'Error al obtener la fruta' })
         return
    })
}

module.exports = { getFrutasPorNombre }