

const rutaInexistente = (req, res) => {
    const { url } = req
    res.status(404).json({ mensaje: [`- La ruta solicitada no existe!`, `- Url solicitada:`, `${url}`] })
}

module.exports = { rutaInexistente }