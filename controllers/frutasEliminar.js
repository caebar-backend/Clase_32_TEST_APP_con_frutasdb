const { FRUTASENDB } = require('../schemas/esquemaFrutas')

const deleteFrutasEliminar = ( req, res ) => {
    const id = parseInt(req.params.id)
    if(isNaN(id)){
        res.status(400).json({message: 'El id debe ser un número'})
        console.log('\x1b[31m El id debe ser un número \x1b[0m')
        return
    } 
    if(id < 0){
        res.status(400).json({message: 'El id debe ser un número positivo'})
        console.log('\x1b[31m El id debe ser un número positivo \x1b[0m')
        return
    }

    FRUTASENDB.findOneAndDelete({id: id})
    .then((fruta) => {
        if(!fruta || fruta.length === 0){
            res.status(404).json({message: 'No se pudo encontrar la fruta'})
            console.log('\x1b[31m No se pudo encontrar la fruta \x1b[0m')
            return
        }
        res.status(200).json({message: 'Fruta eliminada con éxito'})
        console.log('\x1b[32m Fruta eliminada con éxito \x1b[0m')
        return
    })
    .catch((error) => {
        res.status(500).json({message: 'Error al eliminar la fruta', error})
        console.log('\x1b[31m Error al eliminar la fruta \x1b[0m', error)
        return          
        })
    
}

module.exports = { deleteFrutasEliminar }