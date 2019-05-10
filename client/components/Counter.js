import React from 'react'
import { connect } from 'react-redux'
import { increment, fetchCounter } from '../reducers'

const Counter = props => {
  const handleIncrement = () => {
    props.incrementCounter()
  }
  const handleRandom = () => {
    props.fetchCounter()
  }
  const { counter } = props
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement} type="button">
        PLUS
      </button>
      <button onClick={handleRandom} type="button">
        RANDOM
      </button>
    </div>
  )
}

const mapStateForCounter = state => {
  return {
    counter: state.counter,
    name: 'JUST A COUNTER',
  }
}
const mapDispatchForCounter = dispatch => {
  return {
    incrementCounter: () => {
      dispatch(increment())
    },
    fetchCounter: () => {
      dispatch(fetchCounter())
    },
  }
}

export default connect(
  mapStateForCounter,
  mapDispatchForCounter
)(Counter)
