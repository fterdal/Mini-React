import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux'
import CookieForm from './components/CookieForm'
import Counter from './components/Counter'
import ColorPicker from './components/ColorPicker'

render(
  <Provider store={store}>
    <h1>Hello from React!</h1>
    <CookieForm />
    <Counter />
    <ColorPicker />
  </Provider>,
  document.getElementById('app')
)
