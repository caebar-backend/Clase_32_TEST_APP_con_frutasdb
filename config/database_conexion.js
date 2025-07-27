

const mongoose = require('mongoose')
process.loadEnvFile()

const { DB_USER, DB_PASSWORD, DB_NAME } = process.env

const MONGODB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.aii06k7.mongodb.net/${DB_NAME}`

const conexionDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('\x1b[32m Se logró la conexión con la base de datos \x1b[0m')
  } catch (error) {
    console.log('\x1b[31m No se pudo conectar con la base de datos. \x1b[0m', error)
    throw error // ¡No hagas exit acá en testing!
  }
}

const desconectarDB = async () => {
  await mongoose.disconnect()
  console.log('\x1b[33m Conexión a base de datos cerrada \x1b[0m')
}

module.exports = { conexionDB, desconectarDB }