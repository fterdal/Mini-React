import React from 'react'

export const Puppy = ({ puppy: { name, imageUrl } }) => {
  // console.log('PUPPY PROPS', props)
  // const { puppy:  { name } } = props
  return (
    <div>
      <h1>This puppy is named {name}</h1>
      <img src={imageUrl} />
    </div>
  )
}
