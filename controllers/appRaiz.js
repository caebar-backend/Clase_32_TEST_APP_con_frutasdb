
const appRaiz = (req, res) => {
    res.status(200).json({ mensaje: [' < -------------------------------------- > ',
        'Bienvenida/o a la API de frutas!', 
        'En esta aplicación podrás hacer diferentes acciones en una colección', 
        'dentro de la base de datos de MongoDB!', 
        '😁😁😁😁😁😁😁😁',
    ' < -------------------------------------- > '] })
    console.log('\x1b[35m --- Bienvenido, estás en la raíz de las apis frutas 👌😁👍 \x1b[0m')
    console.log('\x1b[33m Conectado en la ruta / ->  Usuario: \x1b[0m ', req.ip)
    return

}

module.exports = { appRaiz }

