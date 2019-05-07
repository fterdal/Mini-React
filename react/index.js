import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import store, { increment, fetchCounter } from './redux'

const Counter = props => {
  const handleIncrement = () => {
    props.incrementCounter()
  }
  const handleRandom = () => {
    props.fetchCounter()
  }
  // console.log('PROPS', props)
  const { counter } = props
  return (
    <div>
      <h1>Hello from React!</h1>
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

const mapState = state => {
  return {
    counter: state.counter,
    name: 'JUST A COUNTER',
  }
}
const mapDispatch = dispatch => {
  return {
    incrementCounter: () => {
      dispatch(increment())
    },
    fetchCounter: () => {
      dispatch(fetchCounter())
    },
  }
}

const ConnectedCounter = connect(
  mapState,
  mapDispatch
)(Counter)

render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById('app')
)
