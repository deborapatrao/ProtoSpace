import React from 'react';
import { Link, useOutletContext } from "react-router-dom";
import Preview from '../Preview';

const PreviewRun = () => {
    const { protocolInfo } = useOutletContext();
    console.log('Info: ', protocolInfo);

    return (
        <section>
            <Preview protocolInfo={protocolInfo} />
        </section>
    );
}

export default PreviewRun;
