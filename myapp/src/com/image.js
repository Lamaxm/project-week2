import React from 'react'
function image() {
  return (
    <div>  <img className='mainphoto' src={process.env.PUBLIC_URL + '/images.jpg'} />
    </div>
  )
}

export default image