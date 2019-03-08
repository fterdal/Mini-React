import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  state = {
    name: '',
    favNumber: 9,
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = async (event) => {
    try {
      event.preventDefault()
      await axios.put('/finn', this.state)
      this.setState({
        name: '',
        favNumber: 9,
      })
    } catch (err) {
      console.error(err)
      this.setState({
        name: '',
        favNumber: 9,
      })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
            type="text" />
          <input
            onChange={this.handleChange}
            value={this.state.favNumber}
            name="favNumber"
            type="number" />
          <button type="submit">Submit Button</button>
        </form>
      </div>
    )
  }
}


render(
  <App />,
  document.getElementById('app')
)
