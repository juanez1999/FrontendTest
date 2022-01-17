import React from 'react'

export const CurrentEvent = ({eventImg,eventTime,eventTitle}) => {

    const handleCurrentEvent = (event) =>{
    }
    return (
        <div className='currentEvent' onClick={handleCurrentEvent}>
            <img src={`${process.env.PUBLIC_URL}/resources/${eventImg}.png`} alt="" />
            <div className='currentEvent__data'>
                <p>{eventTime}</p>
                <h2>{eventTitle}</h2>
            </div>
        </div>
    )
}
