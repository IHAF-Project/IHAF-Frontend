import React from 'react'

function Card4({isVisible}) {
  return (
    <div  className={`intro-slide-4 ${isVisible ? 'actived' : ''}`}>Card4</div>
  )
}

export default Card4