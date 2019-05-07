import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

// ACTION TYPES
const INCREMENT = 'INCREMENT'
const SET_COUNTER = 'SET_COUNTER'

// ACTION CREATOR
export function increment() {
  return {
    type: INCREMENT,
  }
}
export function setCounter(counter) {
  return {
    type: SET_COUNTER,
    counter,
  }
}

// THUNK CREATORS
export function fetchCounter() {
  return async function(dispatch) {
    console.log('WHAT THE THUNK!? 😕')
    try {
      const { data } = await axios.get('/api/counter')
      dispatch(setCounter(data.counter))
    } catch (err) {
      console.log('ERR', err)
    }
  }
}

const initialState = { counter: 0 }

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 }
    case SET_COUNTER:
      return { counter: action.counter }
    default:
      return state
  }
}

// console.log('logger', logger)

export default createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )
)
