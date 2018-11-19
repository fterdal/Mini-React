import React from 'react'
import { ClickableImage } from './ClickableImage'

export class App extends React.Component {
  constructor() {
    super()
    this.state = {
      images: [],
      counter: 0,
    }
    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick = (id) => {
    console.log(`I GOT CLICKED with id ${id}!`)
    this.setState((prevState) => ({
      images: prevState.images.filter(image => image.id !== id)
    }))
    this.incrementCounter() // 1
    this.incrementCounter() // 2
    this.incrementCounter() // 3
  }
  incrementCounter = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 })) // DOES WORK 😇
    // this.setState({counter: this.state.counter + 1}) // DOESNT WORK 😈
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        images: [
          { id: 1, name: 'finn', imageUrl: 'https://robohash.org/finn?set=set2' },
          { id: 2, name: 'adam', imageUrl: 'https://robohash.org/adam?set=set2' },
          { id: 3, name: 'chris', imageUrl: 'https://robohash.org/chris?set=set2' },
          { id: 4, name: 'ozlem', imageUrl: 'https://robohash.org/ozlem?set=set2' }
        ]
      })
    }, 1000)
  }
  render() {
    console.log('COUNTER', this.state.counter)
    return (
      <div style={{ display: 'flex' }}>
        {this.state.images.map(image => (
          <ClickableImage key={image.id} image={image} handleClick={this.handleClick} />
        ))}
      </div>
    )
  }
}

console.log(`Answer:
✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨
✨ ✨ ✨ Stars ✨ ✨ ✨
✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨
`)
