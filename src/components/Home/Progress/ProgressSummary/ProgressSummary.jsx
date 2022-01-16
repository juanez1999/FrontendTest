import React, {useState} from 'react'
import { ProgressSummaryCard } from './ProgressSummaryCard/ProgressSummaryCard';

export const ProgressSummary = () => {

    const [progressActivities, setProgressActivities] = useState([
        {
            activityTitle: 'Total Webinars',
            activityProgress: 9,
        },
        {
            activityTitle: 'Pending Assignments',
            activityProgress: 0,
        },
        {
            activityTitle: 'Total Units',
            activityProgress: 5,
        },
        {
            activityTitle: 'Total Readings',
            activityProgress: 14,
        },
        {
            activityTitle: 'Total Videos',
            activityProgress: 5,
        }
    ]);

    return (
        <div className='progressSummary'>
            <div className='progressSummary__title'>
                <h1>Progress</h1>
                <div className='progressSummary__titleLine'></div>
            </div>
            <div className='progressSummary__cards'>
                {progressActivities.map( (activity,index) => <ProgressSummaryCard key={index} activityTitle={activity.activityTitle} activityProgress={activity.activityProgress} />)}
            </div>
            <div className='progressSummary__banner' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/bannerSummary.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                <p>Confirm your account details</p>
                <p>Please confirm your email and phone number. 😰</p>
            </div>
        </div>
    )
}

