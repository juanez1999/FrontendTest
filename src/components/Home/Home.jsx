import React from 'react'
import { Welcome } from './Welcome/Welcome'
import { Events } from './Events/Events'

export const Home = () => {
    return (
        <div className='home'>
            <Welcome />
            <Events />
        </div>
    )
}
