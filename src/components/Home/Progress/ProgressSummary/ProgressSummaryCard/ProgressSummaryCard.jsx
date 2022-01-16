import React from 'react'

export const ProgressSummaryCard = ({activityTitle,activityProgress}) => {
    return (
        <div className='progressSummaryCard'>
            <h2>{activityTitle}</h2>
            <h1>{activityProgress}</h1>
        </div>
    )
}
