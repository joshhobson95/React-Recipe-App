import React from 'react'

function DetailImg({image, title}) {
  return (
    <div
    className='banner'
    style={{
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`
    

    }}>
    <div>
      <h1>{title}</h1>
    </div>
  </div>
  )
}

export default DetailImg