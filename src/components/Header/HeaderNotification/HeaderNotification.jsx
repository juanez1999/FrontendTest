import React from 'react'

export const HeaderNotification = ({notificationImage,notificationTitle,notificationDay,notificationTime}) => {
    
    return (
        <div className='headerNotification'>
            <img src={process.env.PUBLIC_URL +`/resources/${notificationImage}.png`} alt="" />
            <div className='headerNotification__info'>
                <h2>{notificationTitle}</h2>
                <div>
                    <p>{notificationDay},</p>
                    <p>{notificationTime}</p>
                </div>
            </div>
        </div>
    )
}
