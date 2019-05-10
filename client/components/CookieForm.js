import React from 'react'
import { connect } from 'react-redux'
import { postCookie } from '../reducers'

class CookieForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.createCookie(this.state)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Cookie:</label>
        <input
          name="name"
          onChange={this.handleChange}
          value={this.state.cookie}
        />
        <button type="submit">Create Cookie</button>
      </form>
    )
  }
}

const mapDispatchForCookieForm = dispatch => ({
  createCookie: cookie => {
    dispatch(postCookie(cookie))
  },
})

export default connect(
  null,
  mapDispatchForCookieForm
)(CookieForm)
