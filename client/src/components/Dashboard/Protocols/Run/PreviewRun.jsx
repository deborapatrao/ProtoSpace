import React from 'react';
import { Link, useOutletContext } from "react-router-dom";
import Preview from '../Preview';
import Button from "@mui/material/Button";

const PreviewRun = () => {
    const { protocolInfo } = useOutletContext();
    console.log('Info: ', protocolInfo);

    return (<>
        <div className={"header-preview"}>
            <h2 className={"protocol-title"}>{protocolInfo.name}<span> (Preview)</span></h2>
            <Link to={"description"}><Button variant="contained">Run Protocol</Button></Link>
        </div>
        <section className={"preview-section"}>
            <Preview protocolInfo={protocolInfo} />
            <div className={"navigation-links-preview"}>
                <Link to={-1}>Back</Link>
                <Link to={"description"}><Button variant="contained">Run Protocol</Button></Link>
            </div>
        </section>
        </>

    );
}

export default PreviewRun;
