import React from 'react'

const Dummy = () => (
  <div>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
)

export const ClickableImage = (props) => {
  const { image, handleClick } = props
  if (!image) {
    return (
      <div>
        <h1>Hello, ya dummy! 😜</h1>
        <Dummy />
      </div>
    )
  }
  return (
    <div key={image.id} onClick={() => handleClick(image.id)} >
      <h1>{image.name}</h1>
      <img src={image.imageUrl} />
    </div>
  )
}
