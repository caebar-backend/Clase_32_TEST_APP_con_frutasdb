
// Requiero módulo supertest
const request = require('supertest')

// Solicito función/objeto { expect } del módulo chai
const { expect } = require('chai')

// Incorporo el archivo app.js para activar el servidor cuando se ejecuta el test
const app = require('../app')

// Adquiero el módulo fs para leer el archivo JSON
const fs = require('fs')

// Integro el módulo path para obtener la ruta del archivo JSON
const path = require('path')

// Leo el archivo JSON y lo parseo; lo guardo en una variable
const testCases = JSON.parse(
  // Lectura, además se construye la ruta para llegar al archivo JSON
  fs.readFileSync(path.join(__dirname, './data/endpoints.json'), 'utf-8')
)

// Ejecuto los tests sobre los endpoints
// Se define un bloque de test para cada caso de prueba
describe('🔍 API endpoints embebidos', function () {
  // Se accede a la constaste testcases y se ejecuta las pruebas para cada caso definido en el archivo JSON
  testCases.forEach(({ TestName, Method, Endpoint, ExpectedStatus, Payload }) => {
    // Creamos una prueba individual con información bien detallada y legible
    it(`\n ✅  Nombre: ${TestName} --- Método: ${Method} --- Endpoint: ${Endpoint} --- Estado: ${ExpectedStatus}`, async function () {
      // Se convierte el método a minúsculas para que sea compatible
      const httpMethod = Method.toLowerCase()
      // Defino la variable res para almacenar la respuesta
      let res
      // Si el método es POST, PATCH o PUT, se envia el payload
      if (Payload && ['post', 'patch', 'put'].includes(httpMethod)) {
        res = await request(app)[httpMethod](Endpoint).send(Payload)
      } else {
        res = await request(app)[httpMethod](Endpoint)
      }
      // Se verifica que la respuesta-status coincida con el valor esperado
      // si no coincide, se lanza un error
      expect(res.status).to.equal(Number(ExpectedStatus))
    })
  })
})