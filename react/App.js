import React from 'react'
import { ClickableImage } from './ClickableImage'

export class App extends React.Component {
  constructor() {
    super()
    this.state = {
      images: [],
    }
  }
  handleClick = id => {
    this.setState(prevState => ({
      images: prevState.images.filter(image => image.id !== id),
    }))
  }
  componentDidMount() {
    this.setState({
      images: [
        {
          id: 1,
          name: 'finn',
          imageUrl: 'https://robohash.org/finn?set=set2',
        },
        {
          id: 2,
          name: 'priti',
          imageUrl: 'https://robohash.org/priti?set=set2',
        },
        {
          id: 3,
          name: 'collin',
          imageUrl: 'https://robohash.org/collin?set=set2',
        },
        { id: 4, name: 'ben', imageUrl: 'https://robohash.org/ben?set=set2' },
        {
          id: 5,
          name: 'holly',
          imageUrl: 'https://robohash.org/holly?set=set2',
        },
        {
          id: 6,
          name: 'brett',
          imageUrl: 'https://robohash.org/brett?set=set2',
        },
      ],
    })
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {this.state.images.map(image => (
          <ClickableImage
            key={image.id}
            image={image}
            handleClick={this.handleClick}
          />
        ))}
      </div>
    )
  }
}
