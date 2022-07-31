import React, { useEffect } from 'react';
import { Link, useOutletContext, useParams, useNavigate, useLocation } from 'react-router-dom';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const GuidelinesRun = () => {
    let navigate = useNavigate();
    let location = useLocation();

    const { protocolId } = useParams();

    const { protocolInfo, runStatus } = useOutletContext();

    useEffect(() => {
        if (!runStatus) {
            if (location.pathname.includes('protocols/run/') && protocolInfo.start_run_status === 0) {
                navigate(`/protocols/run/${protocolId}`, { replace: true });
            }
        }
    }, [])

    return (<>
        <section >
            <div className={"guidelines-title"}>
                <h4>Guidelines</h4>
            </div>


            <div className={"guidelines-fields"}>
                <h6>Guidelines</h6>
                <p>{protocolInfo.guideline}</p>
            </div>

            <div className={"guidelines-fields"}>
                <h6>Before start</h6>
                <p>{protocolInfo.before_start}</p>
            </div>

            <div className={"guidelines-fields"}>
                <h6>Safety warnings</h6>
                <p>{protocolInfo.safety_warning}</p>
            </div>

            <div className={"guidelines-fields"}>
                <h6>Confidentiality Policy</h6>
                <p>Sensitive content warning</p>
                <p>Confidential</p>

            </div>


            {/* <div className={"navigation-links-guidelines"}>
                <div className={"link-description"}><ArrowBackIosNewIcon /><Link to={`/protocols/run/${params.protocolId}/description`}>Description</Link></div>
                <div className={"link-materials"}><Link to={`/protocols/run/${params.protocolId}/materials`}>Materials</Link><ArrowForwardIosIcon  /></div>
            </div> */}

            <div className="navigation-links">
                <div className='link-previous'>
                    <Link to={`/protocols/run/${protocolId}/description`}><ArrowBackIosNewIcon />Description</Link>
                </div>
                <div className='link-next'>
                    <Link className={'previewBtn'} to={`/protocols/run/${protocolId}/materials`}>Materials<ArrowForwardIosIcon /></Link>
                </div>
            </div>

        </section>
    </>
    );
}

export default GuidelinesRun;
