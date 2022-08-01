import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HOST_URL } from '../../../../data/data';
import { TextField, NativeSelect } from '@mui/material';
import '../protocolsi.scss';


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

                // console.log('Step: ', resp.data);

                setComponents(resp.data);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();

    }, []);

    return (
        <div>
            {components && components.length > 0 ? components.map((component, index) => {

                return (
                    // <div key={index}>{item.component_name}</div>
                    <div key={index} className='single-component'>
                        <div>Name: {component.component_name}</div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <label htmlFor='value' className={'component-label'}>Value: </label>
                            <TextField
                                id="value"
                                type="number"
                                variant="standard"
                                name='component_value'
                                value={component.component_value}
                            />

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <label htmlFor='info' className={'component-label'}>Additional info: </label>
                            <TextField
                                id="info"
                                variant="standard"
                                name='component_information'
                                value={component.component_information}
                            />

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <label htmlFor='info' className={'component-label'}>{`${component.unit_name}: `}</label>
                            <TextField
                                id="info"
                                variant="standard"
                                name='component_information'
                                value={`${component.component_value}${component.symbol}`}
                            />
                        </div>
                    </div>
                )
            }) : 'There are no components'}
        </div>
    );
}

export default SingleComponentRun;
