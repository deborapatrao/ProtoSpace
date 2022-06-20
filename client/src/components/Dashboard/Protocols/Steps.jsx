import React from 'react';
import {
    useOutletContext
} from "react-router-dom";

const Steps = () => {
    const { data, setData } = useOutletContext();
    return (
        <div>
            Steps
        </div>
    );
}

export default Steps;