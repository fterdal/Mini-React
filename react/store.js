import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

// ACTION TYPES
const SET_ROBOTS = 'SET_ROBOTS'
const REMOVE_ROBOT = 'REMOVE_ROBOT'

// ACTION CREATORS
export const setRobots = (robots) => ({
  type: SET_ROBOTS,
  robots
})

export const removeRobot = (robotName) => ({
  type: REMOVE_ROBOT,
  robotName,
})

const defaultState = {
  robots: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ROBOTS:
      console.log('ACTION.ROBOTS', action.robots)
      return { robots: action.robots }
    case REMOVE_ROBOT:
      return { robots: state.robots.filter(robot => robot.name !== action.robotName ) }
    default:
      return state
  }
}

export const store = createStore(
  reducer,
  applyMiddleware(logger)
)
