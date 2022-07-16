import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HOST_URL } from '../../../../data/data';
import axios from 'axios';

const StepsRun = () => {
    const [steps, setSteps] = useState({});

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

                // setSteps(resp.data);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();

    }, []);

    return (
        <section>
            Steps
        </section>
    );
}

export default StepsRun;
