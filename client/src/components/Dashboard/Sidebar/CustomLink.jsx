import React from 'react';
import {
    Link,
    useResolvedPath,
    useMatch
} from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <>
            <div className={match ? 'active-sidebar' : 'inactive-sidebar'}>
                <Link 
                    // style={{ color: match ? "red" : "black" }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
                
            </div>
        </>
    );
}

export default CustomLink;