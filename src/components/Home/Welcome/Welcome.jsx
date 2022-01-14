import React from 'react'

export const Welcome = () => {
    return (
        <div className='welcome'>
            <div className='welcome__title'>
                <h1>Dashboard</h1>
                <div className='welcome__titleCard'>
                    <p>Currently Learning</p>
                    <div className='welcome__titleCardIdiom'>
                        <img src={process.env.PUBLIC_URL +`/resources/english.png`} alt="" />
                        <h2>English</h2>
                    </div>
                </div>
            </div>
            <div className='welcome__banner' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/bannerWelcome.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                <img src={process.env.PUBLIC_URL +`/resources/avatar.svg`}alt="" />
                <div>
                    <h1>Welcome back, Clarence</h1>
                    <h2>Ta-da! You're up to date</h2>
                </div>
            </div>
        </div>
    )
}
