
const { FRUTASENDB } = require('../schemas/esquemaFrutas')

const getFrutasPorImporte = (req, res) => {
    const { importe } = req.params
    const importeInt = parseInt(importe)

    if(isNaN(importeInt)) {
        res.status(400).json({ mensaje: 'El precio debe ser un número!'})
        return console.log('\x1b[31m El precio debe ser un número! \x1b[0m')
    }
    
    if(importeInt < 0) {
        res.status(400).json({ mensaje: 'El precio debe ser número positivo!'})
        return console.log('\x1b[31m El precio debe ser número positivo! \x1b[0m')
    }

    FRUTASENDB.find({ precio: importeInt })
    .then((frutas) => {
        if(frutas.length === 0) {
            res.status(404).json({ mensaje: 'No hay frutas con ese precio!'})
            return console.log('\x1b[31m No hay frutas con ese precio! \x1b[0m')
        }
        const frutita = frutas.map((fruta) => {
            return {
                id: fruta.id,
                nombre: fruta.nombre,
                imagen: fruta.imagen,
                precio: fruta.precio
            }
        })
        console.log('\x1b[33m ############################################ \x1b[0m')
        console.log('\x1b[35m --------- Busqueda fruta por Precio ------------ \x1b[0m')
        console.table(frutita)
        console.log('\x1b[35m -------------------------------------------------- \x1b[0m')
        res.status(200).json(frutas)
       
        return 
        })
    .catch((error) => {
        res.status(500).json({ mensaje: 'Error en la base de datos!'})
        return console.log('\x1b[31m Error en la base de datos! \x1b[0m')
    })
}

module.exports = { getFrutasPorImporte }