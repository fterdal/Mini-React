import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'

// ACTION TYPES
const INCREMENT = 'INCREMENT'

// ACTION CREATOR
export function increment() {
  return {
    type: INCREMENT,
  }
}

const initialState = { counter: 0 }

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 }
    default:
      return state
  }
}

// console.log('logger', logger)

export default createStore(reducer, applyMiddleware(
  loggerMiddleware
))
