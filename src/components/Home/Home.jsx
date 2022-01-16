import React from 'react'
import { Welcome } from './Welcome/Welcome'
import { Events } from './Events/Events'
import { Activity } from './Activity/Activity'
import { Progress } from './Progress/Progress'

export const Home = () => {
    return (
        <div className='home'>
            <Welcome />
            <Events />
            <Activity />
            <Progress />
        </div>
    )
}
