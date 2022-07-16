import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const DescriptionRun = () => {
    const { protocolInfo } = useOutletContext();

    return (
        <section>
            <div className={"section-header-desc"}>
                <div className={"description-title"}>
                    <h2>Description</h2>
                </div>
                <div><span className={"mandatory"}>*</span> This section need to be filled</div>
            </div>
            <div>
                Name: {protocolInfo.name}
                Author: {protocolInfo.author}
                <p>{protocolInfo.abstract}</p>
            </div>
        </section>
    );
}

export default DescriptionRun;
