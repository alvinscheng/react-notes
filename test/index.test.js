const { describe, it } = require('mocha')
const { expect } = require('chai')
const request = require('request')

describe('Notes', () => {
  const url = 'http://localhost:3000/notes'

  describe('GET', () => {
    it('should return an array of notes', done => {
      request(url, {json: true}, (err, res, body) => {
        expect(err).to.equal(null)
        expect(body).to.be.an('array')
        expect(res).to.have.property('statusCode', 200)
        done()
      })
    })
  })
})
