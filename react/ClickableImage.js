import React from 'react'

export const ClickableImage = (props) => {
  const { image, handleClick } = props
  return (
    <div key={image.id} onClick={() => handleClick(image.id)} >
      <h1>{image.name}</h1>
      <img src={image.imageUrl} />
    </div>
  )
}
