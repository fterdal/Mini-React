
// ACTION TYPES
const SET_COLOR = 'SET_COLOR'

// ACTION CREATOR
export function setColor(color) {
  return {
    type: SET_COLOR,
    color,
  }
}

const initialState = 'white'

export default function colorReducer(state = initialState, action) {
  console.log('STEP 3 - hit the reducer')
  switch (action.type) {
    case SET_COLOR:
      return action.color
    default:
      return state
  }
}
