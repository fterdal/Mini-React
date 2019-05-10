import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import store, { increment, fetchCounter, setColor } from './redux'
// import { increment, fetchCounter } from './counter'
// import { setColor } from './color'
import CookieForm from './CookieForm'

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

const ConnectedCounter = connect(
  mapStateForCounter,
  mapDispatchForCounter
)(Counter)

const ColorPicker = props => {
  // console.log('PROPS', props)
  const { color } = props
  const handleColorChange = event => {
    console.log('STEP 1 - handle event')
    props.setColor(event.target.value)
  }
  return (
    <div style={{ backgroundColor: color }}>
      <h3>Enter a Color:</h3>
      <input onChange={handleColorChange} />
    </div>
  )
}

const mapStateForColorPicker = ({ color }) => {
  console.log('STEP 4 - mapStateToProps')
  return {
    color,
  }
}

const mapDispatchForColorPicker = dispatch => ({
  setColor: color => {
    console.log('STEP 2 - dispatch')
    dispatch(setColor(color))
  },
})

const ConnectedColorPicker = connect(
  mapStateForColorPicker,
  mapDispatchForColorPicker
)(ColorPicker)

render(
  <Provider store={store}>
    <h1>Hello from React!</h1>
    <CookieForm />
    <ConnectedCounter />
    <ConnectedColorPicker />
  </Provider>,
  document.getElementById('app')
)
