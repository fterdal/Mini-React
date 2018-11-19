const api = require('../api')
const { expect } = require('chai')
const agent = require('supertest')(api)

xdescribe('The API', () => {
  it('responds with "hello" on /hello', () => {
    const response = agent
      .get('/hello')
      .expect(200)
    // console.log('response', response)
    expect(response.body).to.deep.equal('hello')
  })
})
