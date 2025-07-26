const express = require('express')
const { conexionDB } = require('./config/database_conexion')
const { router } = require('./routes/frutasRoutes')
const { rutaInexistente } = require('./controllers/ruta404')

process.loadEnvFile()

const app = express()

const puerto = process.env.PORT
const LH = process.env.LOCALHOST

app.use(express.json())
app.use('/', router)
app.use(rutaInexistente)

const servidorArranca = () => {
    try {
        conexionDB()
        app.listen(puerto, () => {
            console.log(`\x1b[32m Server corriendo en el puerto http://${LH}:${puerto} \x1b[0m`)
        })
    } catch (error) {
        console.log('\x1b[31m Error al arrancar el servidor \x1b[0m', error)
        process.exit(1)
    }
}

servidorArranca()