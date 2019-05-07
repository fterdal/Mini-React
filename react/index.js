import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import store from './redux'
import { increment, fetchCounter } from './counter'
import { setColor } from './color'

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

const ConnectedCounter = connect(
  mapStateForCounter,
  mapDispatchForCounter
)(Counter)

const ColorPicker = props => {
  console.log('PROPS', props)
  const { color } = props
  const handleColorChange = event => {
    props.setColor(event.target.value)
  }
  return (
    <div style={{backgroundColor: color}}>
      <h3>Enter a Color:</h3>
      <input onChange={handleColorChange} />
    </div>
  )
}

const mapStateForColorPicker = ({ color }) => ({ color })

const mapDispatchForColorPicker = dispatch => ({
  setColor: color => {
    dispatch(setColor(color))
  },
})

const ConnectedColorPicker = connect(
  mapStateForColorPicker,
  mapDispatchForColorPicker
)(ColorPicker)

render(
  <Provider store={store}>
    <ConnectedCounter />
    <ConnectedColorPicker />
  </Provider>,
  document.getElementById('app')
)
