import React from 'react'

export const ButtonEvents = ({direction}) => {
    return (
        <button className='buttonEvents' 
        style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/${direction}Arrow.png)`, backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center center', backgroundSize: '50%'}}></button>
    )
}
