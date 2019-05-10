import { createStore, applyMiddleware, combineReducers } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import counterReducer from './counter'
import colorReducer from './color'

const reducer = combineReducers({
  counter: counterReducer,
  color: colorReducer,
})

export default createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )
)
