import React from 'react'

export const Header = () => {
    return (
        <div className='header'>
            <img className="header__logo" src={process.env.PUBLIC_URL +'/resources/logo.png'} alt=""/>
            <div className='textfield textfield--imgLeft'>
                <input type="text" className="textfield__input" placeholder="Search and Find" />
                <img src={process.env.PUBLIC_URL +'/resources/lupa.png'} alt="" className="textfield__icon"></img>
            </div>
            <div className='header__options'>
                <button className='btnAdd'>+ ADD</button>
                <div className='header__optionsProfile'>
                    <div className='header__optionsProfileNotifications'>
                        <img src={process.env.PUBLIC_URL +'/resources/notification.png'} alt="" />
                        <img src={process.env.PUBLIC_URL +'/resources/chat.png'} alt="" />
                    </div>
                    <div className='header__optionsProfileUser'>
                        <p>Clarence Russell</p>
                        <img src={process.env.PUBLIC_URL +'/resources/profile.png'} alt="" />
                        <img src={process.env.PUBLIC_URL +'/resources/arrowDown.png'} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
