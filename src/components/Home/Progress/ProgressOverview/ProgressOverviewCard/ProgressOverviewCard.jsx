import React from 'react'

export const ProgressOverviewCard = ({progressStatus,progressTime}) => {
    const progress = progressStatus === 'Completed' ? "Completed" : "Left to go";

    return (
        <div className='progressOverview__cardItem'>
            <div className='progressOverview__cardItemStatus'>
                {progress === 'Completed' ? <div style={{backgroundColor: '#FED200'}}></div> : <div style={{backgroundColor: '#FF794F'}}></div>}
                <p>{progress}</p>
            </div>
            <div className='progressOverview__cardItemHours'>
                <h1>{progressTime}</h1>
                <p>hours</p>
            </div>
        </div>
    )
}
