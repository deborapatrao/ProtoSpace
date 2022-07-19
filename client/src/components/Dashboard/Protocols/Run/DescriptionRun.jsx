import React from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const DescriptionRun = () => {

    const { protocolId } = useParams();

    const params = {
        protocolId: protocolId
    }

    const { protocolInfo } = useOutletContext();

    return (<>
        <h2>{protocolInfo.name}</h2>
        <section>
            <div className={"description-title"}>
                <h4>Description</h4>
            </div>

            <div className={"description-fields"}>
                <h6>Protocol Name</h6>
                <p>{protocolInfo.name}</p>
            </div>

            <div className={"description-fields"}>
                <h6>Abstract</h6>
                <p>{protocolInfo.abstract}</p>
            </div>

            <div className={"description-fields"}>
                <h6>Author</h6>
                <p>{protocolInfo.author}</p>
            </div>

            <div className={"description-fields"}>
                <h6>Disclaimer</h6>
                <p>{protocolInfo.disclaimer}</p>
            </div>

            {/* <div style={{ float: 'right' }} className={"link-guideline"}>
                <Link to={`/protocols/run/${params.protocolId}/guidelines`}>Guidelines</Link>
                <ArrowForwardIosIcon />
            </div> */}
            <div className="navigation-links">
                <div className='link-next'>
                    <Link className={'previewBtn'} to={`/protocols/run/${params.protocolId}/guidelines`}>Guidelines<ArrowForwardIosIcon /></Link>
                </div>
            </div>

        </section>
    </>
    );
}

export default DescriptionRun;
