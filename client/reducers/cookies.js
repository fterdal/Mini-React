import axios from 'axios'

// ACTION TYPES
const SET_COOKIES = 'SET_COOKIES'
const ADD_COOKIE = 'ADD_COOKIE'

// ACTION CREATORS
export function setCookies(cookies) {
  return {
    type: SET_COOKIES,
    cookies,
  }
}
export function addCookie(cookie) {
  return {
    type: ADD_COOKIE,
    cookie,
  }
}

// THUNK CREATORS
export function fetchCookies() {
  return async function(dispatch) {
    try {
      const { data } = await axios.get('/api/cookies')
      dispatch(setCookies(data))
    } catch (err) {
      console.log('ERR', err)
    }
  }
}
export function postCookie(cookie) {
  return async function(dispatch) {
    try {
      const { data } = await axios.post('/api/cookies', cookie)
      console.log(data)
      dispatch(addCookie(data))
    } catch (err) {
      console.log('ERR', err)
    }
  }
}

const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_COOKIES:
      return action.cookies
    case ADD_COOKIE:
      return [...state, action.cookie]
    default:
      return state
  }
}
