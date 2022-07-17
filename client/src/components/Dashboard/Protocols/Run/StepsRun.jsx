import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HOST_URL } from '../../../../data/data';
import axios from 'axios';
import SingleStepRun from './SingleStepRun';

const StepsRun = () => {
    const [steps, setSteps] = useState([]);
    const [activeStep, setActiveStep] = useState(0);

    const { protocolId } = useParams();

    useEffect(() => {
        // const protocolNew = protocols.find(item => item.protocol_id === Number(protocolId));
        // console.log('New: ', protocolNew);
        // setProtocolInfo(protocolNew);

        async function fetchData() {
            const user = JSON.parse(localStorage.getItem('user'));

            const params = {
                protocolId: protocolId
            }

            try {
                const resp = await axios.post(`${HOST_URL}/api/step`, {
                    ...params
                }, {
                    headers: {
                        "x-access-token": user.accessToken
                    }
                });

                console.log(resp.data);

                setSteps(resp.data);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();

    }, []);

    return (
        <section>
            {steps ? steps.map((item, index) => {
                return <SingleStepRun stepsQnt={steps.length} disabled={activeStep === index ? false : true} key={index} step={item} activeStep={activeStep} setActiveStep={setActiveStep} />
            }) : ''}
        </section>
    );
}

export default StepsRun;
