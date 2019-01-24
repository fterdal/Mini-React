import React, { useState } from 'react'
import { render } from 'react-dom'

class ClassComp extends React.Component {
  state = {
    thing: ''
  }
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div>
        <label htmlFor="thing">ClassComp Thing:</label>
        <input
          value={this.state.thing}
          onChange={this.handleChange}
          name="thing"
          type="text" />
      </div>
    )
  }
}

const HookComp = () => {
  const [thing, setThing] = useState('')
  const handleChange = ({ target: { value } }) => {
    setThing(value)
  }
  return (
    <div>
      <label htmlFor="thing">HookComp Thing:</label>
      <input
        value={thing}
        onChange={handleChange}
        name="thing"
        type="text" />
    </div>
  )
}

const App = () => (
  <div>
    <h1>Hello from React!</h1>
    <ClassComp />
    <HookComp />
  </div>
)

render(
  <App />,
  document.getElementById('app')
)

