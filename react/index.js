import React from 'react'
import { render } from 'react-dom'
import store, { increment } from './redux'

class ConnectedCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState(state)
    })
  }
  render() {
    console.log('ConnectedCounter state:', this.state)
    return <Counter counter={this.state.counter} />
  }
}

const Counter = props => {
  // console.log(store.getState())
  // const { counter } = store.getState()
  const handleClick = () => {
    store.dispatch(increment())
  }
  console.log('PROPS', props)
  const { counter } = props
  return (
    <div>
      <h1>Hello from React!</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={handleClick} type="button">
        PLUS
      </button>
      <button type="button">MINUS</button>
    </div>
  )
}

render(<ConnectedCounter />, document.getElementById('app'))
