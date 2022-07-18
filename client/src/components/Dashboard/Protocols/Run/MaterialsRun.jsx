import React from 'react';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {Link, useOutletContext} from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MaterialsRun = () => {

    const { protocolInfo } = useOutletContext();

    return (
        <section>
                <div className={"materials-title"}>
                    <h4>Materials</h4>
                </div>

            <div className={"materials-fields"}>
                <h6>List of materials</h6>
                <p>{protocolInfo.materials}</p>
            </div>

            <div className={"navigation-links"}>
                <div className={"link-guideline"}><ArrowBackIosNewIcon /><Link to={"guidelines"}>Guidelines</Link></div>
                <div className={"link-step"}><Link to={"steps"}>Steps</Link><ArrowForwardIosIcon /></div>
            </div>
        </section>
    );
}

export default MaterialsRun;
