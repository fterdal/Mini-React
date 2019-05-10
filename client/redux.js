import { createStore, applyMiddleware, combineReducers } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { counterReducer, colorReducer, cookiesReducer } from './reducers'

const reducer = combineReducers({
  counter: counterReducer,
  color: colorReducer,
  cookies: cookiesReducer,
})

// Export everything from ./reducers
export * from './reducers'

export default createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )
)
