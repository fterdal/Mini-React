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

const initialState = 0

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case SET_COUNTER:
      return action.counter
    default:
      return state
  }
}
