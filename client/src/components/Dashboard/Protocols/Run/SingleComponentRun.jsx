import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HOST_URL } from '../../../../data/data';


const SingleComponentRun = ({ stepId }) => {
    const [components, setComponents] = useState([])


    useEffect(() => {
        // const protocolNew = protocols.find(item => item.protocol_id === Number(protocolId));
        // console.log('New: ', protocolNew);
        // setProtocolInfo(protocolNew);

        async function fetchData() {
            const user = JSON.parse(localStorage.getItem('user'));

            const params = {
                stepId: stepId
            }

            try {
                const resp = await axios.post(`${HOST_URL}/api/component/step`, {
                    ...params
                }, {
                    headers: {
                        "x-access-token": user.accessToken
                    }
                });

                console.log(resp.data);

                setComponents(resp.data);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();

    }, []);

    return (
        <ul>
            {components && components.length > 0 ? components.map((item, index) => {
                return (
                    <li key={index}>{item.component_name}</li>
                )
            }) : 'There are no components'}
        </ul>
    );
}

export default SingleComponentRun;
