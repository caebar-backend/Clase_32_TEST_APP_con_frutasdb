const express = require('express')
const http = require('http')
const { conexionDB, desconectarDB } = require('./config/database_conexion')
const { router } = require('./routes/frutasRoutes')
const { rutaInexistente } = require('./controllers/ruta404')

process.loadEnvFile()

const app = express()

const puertoPrincipal = process.env.PORT
const puertoSecundario = 3000
const LH = process.env.LOCALHOST

app.use(express.json())
app.use('/', router)
app.use(rutaInexistente)

const servidorArranca = () => {
    try {
        conexionDB()

        app.listen(puertoPrincipal, () => {
            console.log(`\x1b[32m Server corriendo en http://${LH}:${puertoPrincipal} \x1b[0m`)
        })

        http.createServer(app).listen(puertoSecundario, () => {
            console.log(`\x1b[36m Servidor adicional en http://${LH}:${puertoSecundario} \x1b[0m`)
        })

    } catch (error) {
        console.log('\x1b[31m Error al arrancar el servidor \x1b[0m', error)
        process.exit(1)
    } finally {
        if (!conexionDB) return desconectarDB()
    }
}

servidorArranca()
module.exports = app