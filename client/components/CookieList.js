import React from 'react'
import { connect } from 'react-redux'

const CookieList = (props) => {
  return (
    <div>
      <h2>Cookies 🍪:</h2>
      <ul>
        {props.cookies.map(cookie => (
          <li key={cookie.id}>{cookie.name}</li>
        ))}
      </ul>
    </div>
  )
}

const mapListForCookieList = ({ cookies }) => ({ cookies })

export default connect(
  mapListForCookieList
)(CookieList)
