import React, {useState} from 'react'
import { NavOption } from './NavOption/NavOption'

export const Nav = React.forwardRef((props,ref) => {
    const [imagesOpts, setImagesOpts] = useState(['home','dashboard','files','data','messages']);
    
    return (
        <div className='nav' ref={ref}>
            {imagesOpts.map((image,index) => <NavOption key={index} imageUrl={image} url={image}/>
            )}
        </div>
    )
});
