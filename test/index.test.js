require('dotenv').config()
const { describe, it } = require('mocha')
const { expect } = require('chai')
const request = require('request')

describe('Notes', () => {
  const url = 'http://localhost:' + process.env.PORT + '/notes'

  describe('GET /notes', () => {
    it('returns an array of notes', done => {
      request(url, { json: true }, (err, res, body) => {
        expect(err).to.equal(null)
        expect(res).to.have.property('statusCode', 200)
        expect(body).to.be.an('array')
        done()
      })
    })
  })

})
