import React from 'react'
import { connect } from 'react-redux'
import { fetchCookies } from '../reducers'

class CookieList extends React.Component {
  componentDidMount() {
    this.props.fetchInitialCookies()
  }
  render() {
    console.log(this.props.cookies)
    return (
      <div>
        <h2>Cookies 🍪:</h2>
        <ul>
          {this.props.cookies.map(cookie => (
            <li key={cookie.id}>{cookie.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapPropsForCookieList = ({ cookies }) => ({ cookies })

const mapDispatchForCookieList = dispatch => {
  return {
    fetchInitialCookies: () => dispatch(fetchCookies()),
  }
}

export default connect(
  mapPropsForCookieList,
  mapDispatchForCookieList,
)(CookieList)
