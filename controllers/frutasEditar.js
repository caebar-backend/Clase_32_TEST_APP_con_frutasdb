const { FRUTASENDB } = require('../schemas/esquemaFrutas')

const patchFrutasEditar = (req, res) => {
    const  idp  = req.params.id
    const idOK = parseInt(idp)

    if(isNaN(idOK)){
        res.status(400).json({message: 'El id debe ser un número'})
        console.log('\x1b[31m El id debe ser un número \x1b[0m')
        return
    } 

    if(idOK < 0){
        res.status(400).json({message: 'El id debe ser un número positivo'})
        console.log('\x1b[31m El id debe ser un número positivo \x1b[0m')
        return
    }

    FRUTASENDB.findOneAndUpdate({id: idOK}, { ...req.body })
    .then((fruta) => {
        if(!fruta){
            res.status(404).json({message: 'No se pudo encontrar la fruta'})
            console.log('\x1b[31m No se pudo encontrar la fruta \x1b[0m')
            return
        }
        res.status(200).json({...req.body})
        console.log('\x1b[32m Fruta editada con éxito \x1b[0m')
        return
    })
    .catch((error) => {
        res.status(500).json({message: 'Error al editar la fruta', error})
        console.log('\x1b[31m Error al editar la fruta \x1b[0m', error)
        return      
    })
        }


module.exports = { patchFrutasEditar }