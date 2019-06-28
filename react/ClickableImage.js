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
  return (
    <div key={image.id} onClick={() => handleClick(image.id)} >
      <h1>{image.name}</h1>
      <Dummy />
      <img src={image.imageUrl} />
    </div>
  )
}
