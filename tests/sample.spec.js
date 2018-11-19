const { expect } = require('chai')
const sinon = require('sinon')

const rollDice = (numDice) => {
  let sum = 0
  for (let i = 0; i < numDice; i++) {
    sum += Math.floor(Math.random() * 6) + 1
  }
  return sum
}

xdescribe('rollDice', () => {
  let stub
  beforeEach(() => {
    stub = sinon.stub(Math, 'random')
    stub.returns(0.4)
  })
  afterEach(() => {
    stub.restore()
  })
  it('rolls some dice', () => {
    console.log('Math.random()', Math.random())
    console.log('rollDice(1)', rollDice(1))
    console.log('rollDice(1)', rollDice(1))
    console.log('rollDice(1)', rollDice(1))
    expect(rollDice(2)).to.equal(6)
  })
})
