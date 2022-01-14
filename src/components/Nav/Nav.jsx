import React, {useState} from 'react'
import { NavOption } from './NavOption/NavOption'

export const Nav = () => {
    const [imagesOpts, setImagesOpts] = useState(['home','dashboard','files','data','messages']);

    return (
        <div className='nav'>
            {imagesOpts.map((image) => <NavOption imageUrl={image} url={image}/>
            )}
        </div>
    )
}
