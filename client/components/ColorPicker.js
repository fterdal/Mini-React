import React from 'react'
import { connect } from 'react-redux'
import { setColor } from '../reducers'

const ColorPicker = props => {
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

export default connect(
  mapStateForColorPicker,
  mapDispatchForColorPicker
)(ColorPicker)
