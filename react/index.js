import React from 'react'
import { render } from 'react-dom'

const finn = {
  name: 'Finn',
  city: 'Portland'
}
console.log('👶🏻 Original FINN: ', finn)

const App = (props) => (
  <div>
    <button
      type="button"
      onClick={() => {
        finn.city = 'Chicago'
        console.log('☣️ Mutated FINN: ', finn)
      }}>
      Click Me
    </button>
    <p>
      ☝️ Clicking this button will mutate the finn object, which is passed in
      as a prop to the App component. And yet, App won't re-render. Why is that?
    </p>
    <h1>{props.finn.name} lives in {props.finn.city}!</h1>
  </div>
)

render(
  <App finn={finn} />,
  document.getElementById('app')
)
