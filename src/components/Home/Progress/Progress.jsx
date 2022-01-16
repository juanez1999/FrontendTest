import React from 'react'
import { ProgressOverview } from './ProgressOverview/ProgressOverview'
import { ProgressSummary } from './ProgressSummary/ProgressSummary'

export const Progress = () => {
    return (
        <div className='progress'>
            <ProgressOverview />
            <ProgressSummary />
        </div>
    )
}
