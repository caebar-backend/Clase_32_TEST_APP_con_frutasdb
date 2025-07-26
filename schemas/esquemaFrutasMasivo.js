const ajv = require('ajv')

const formatoFrutas = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        imagen: { type: 'string' },
        nombre: { type: 'string' },
        precio: { type: 'number' },
    },
    required: ['imagen', 'nombre', 'precio'],
    additionalProperties: false,
}

module.exports = { formatoFrutas }