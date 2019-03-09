import React from 'react'
import { render } from 'react-dom'

const App = () => (
  <div>
    <h1>Hello from React!</h1>
    <p>Riddle: We come at night without being fetched; we disappear by day without being stolen. What are we?</p>
    <p style={{fontStyle: 'italic'}}>Pop open the developer tools to see the answer.</p>
  </div>
)

console.log(`Answer:
✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨
✨ ✨ ✨ Stars ✨ ✨ ✨
✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨
`)

render(
  <App />,
  document.getElementById('app')
)

