

const request = require('supertest')
const { expect } = require('chai')
const app = require('../app')

const fs = require('fs')
const path = require('path')

const testCases = JSON.parse(
  fs.readFileSync(path.join(__dirname, './data/endpoints.json'), 'utf-8')
)

describe('🔍 API endpoints embebidos', function () {
  testCases.forEach(({ TestName, Method, Endpoint, ExpectedStatus, Payload }) => {
    it(`✔️ ${TestName}`, async function () {
      const httpMethod = Method.toLowerCase()
      let res

      if (Payload && ['post', 'patch', 'put'].includes(httpMethod)) {
        res = await request(app)[httpMethod](Endpoint).send(Payload)
      } else {
        res = await request(app)[httpMethod](Endpoint)
      }

      expect(res.status).to.equal(Number(ExpectedStatus))
    })
  })
})