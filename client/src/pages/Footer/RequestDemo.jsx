import React from 'react'
import {TextField} from "@mui/material";


const RequestDemo = props => {

    return <>
        <div className="request-demo-footer">
            <span></span>
            <label>Email Address</label>
            <TextField type={'email'} placeholder={"Email Address"}/>
            <button className={"demo-btn-footer"} >Book a demo</button>
        </div>
    </>
}

export default RequestDemo;