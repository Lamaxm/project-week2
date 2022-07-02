import React from 'react'

const Card =(props)  => {
  return (
    <div className='card'>
        <img className='img-card' src={props.cards.photo}></img><br></br>
        <strong>{props.cards.name}<br></br></strong>
        {props.cards.description}
    </div>
  )
}

export default Card