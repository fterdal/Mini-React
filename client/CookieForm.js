import React from 'react'

class CookieForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cookie: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log('event.target', event.target)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="cookie">Cookie:</label>
        <input
          name="cookie"
          onChange={this.handleChange}
          value={this.state.cookie}
        />
        <button type="submit">Create Cookie</button>
      </form>
    )
  }
}

export default CookieForm
