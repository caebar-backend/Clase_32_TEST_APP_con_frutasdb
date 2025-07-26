const ajv = require('ajv')
const ajv_NEW = new ajv()

const { formatoFrutas } = require('../schemas/esquemaFrutasMasivo')

const validarFormatoFrutas = (req, res, next) => {
    const validar = ajv_NEW.compile(formatoFrutas)
    const datos = { ...req.body }
    let errores = []

    if(Array.isArray(datos)){
        const validos = datos.map((item, index) => {
            const esValido = validar(item)
            if(!esValido){
                errores.push({index, errores:validar.errors})
            }
            return esValido
        })

        if(errores.length > 0){
            return res.status(400).json({ 
                mensaje: 'Algunos datos no son validos',
                detalles: errores
            })
        }
    } else {
        const valido = validar(datos)
        if(!valido){
            return res.status(400).json({
                mensaje: 'El formato de los datos no es valido',
                detalles: validar.errors
            })
        }
    }

    next()

}

module.exports = { validarFormatoFrutas }