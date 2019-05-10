import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import store, { setColor } from './redux'
import CookieForm from './components/CookieForm'
import Counter from './components/Counter'

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
    <Counter />
    <ConnectedColorPicker />
  </Provider>,
  document.getElementById('app')
)
