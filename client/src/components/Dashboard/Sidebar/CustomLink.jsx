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
            <Link
                // style={{ color: match ? "red" : "black" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && " (active)"}
        </>
    );
}

export default CustomLink;