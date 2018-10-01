import React from 'react'
import { render } from 'react-dom'


import { Puppy } from './Puppy'

const puppy = { name: 'Theodore', imageUrl: '/puppy.jpg' }
const App = () => (
  <div>
    <h1>Main Component</h1>
    <Puppy puppy={puppy} />
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

