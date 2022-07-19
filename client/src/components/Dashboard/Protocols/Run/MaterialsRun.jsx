import React from 'react';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link, useOutletContext, useParams } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MaterialsRun = () => {

    const { protocolId } = useParams();

    const params = {
        protocolId: protocolId
    }
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

            {/* <div className={"navigation-links"}>
                <div className={"link-guideline"}><ArrowBackIosNewIcon /><Link to={`/protocols/run/${params.protocolId}/guidelines`}>Guidelines</Link></div>
                <div className={"link-step"}><Link to={`/protocols/run/${params.protocolId}/steps`}>Steps</Link><ArrowForwardIosIcon /></div>
            </div> */}

            <div className="navigation-links">
                <div className='link-previous'>
                    <Link to={`/protocols/run/${params.protocolId}/guidelines`}><ArrowBackIosNewIcon />Guidelines</Link>
                </div>
                <div className='link-next'>
                    <Link className={'previewBtn'} to={`/protocols/run/${params.protocolId}/steps`}>Steps<ArrowForwardIosIcon /></Link>
                </div>
            </div>
        </section>
    );
}

export default MaterialsRun;
