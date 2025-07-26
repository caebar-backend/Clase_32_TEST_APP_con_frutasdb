
const { FRUTASENDB } = require('../schemas/esquemaFrutas')
let frutasMapeo = []

const getFrutas = (req, res) => {
    FRUTASENDB.find({})
    .then((frutitas) => {
        if(!frutitas || frutitas.length === 0){
            console.log('\x1b[33m No se pudieron encontrar las frutas para mostrar \x1b[0m')
            return res.status(500).json({ mensaje: 'Error en el servidor para obtener las frutas' })
       }
       frutitas.forEach((f) => {
           frutasMapeo.push({
               id: f.id,
               imagen: f.imagen,
               nombre: f.nombre,
               precio: f.precio
           })
       })
       console.log('\x1b[34m ------ Se obtuvieron las frutas ----- \x1b[0m')
       console.table(frutasMapeo)
       console.log('\x1b[34m ----------------------------------- \x1b[0m')

       return res.status(200).json(frutasMapeo)
    })

    .catch((error) => {
        console.log('\x1b[31m Error al obtener las frutas \x1b[0m', error)
        return res.status(500).json({ mensaje: ['Error al obtener las frutas', error] })
    })
}

module.exports = { getFrutas }