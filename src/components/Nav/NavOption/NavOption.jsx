import React from 'react'
import { Link } from 'react-router-dom'
import { useMatch, useResolvedPath } from "react-router-dom";

export const NavOption = ({imageUrl,url}) => {
    let resolved = useResolvedPath(url);
    let match = useMatch({ path: resolved.pathname, end: true }); 

    return (
        <Link to={url} className={`navOption ${match ? "navOption--active" : ""}`}>
            <img src={process.env.PUBLIC_URL +`/resources/${imageUrl}.png`} alt="" />
        </Link>
    )
}
