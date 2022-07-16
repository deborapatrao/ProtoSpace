import React, { useEffect, useState } from 'react';
import { Link, Outlet, useOutletContext, useParams } from 'react-router-dom';
import { HOST_URL } from '../../../../data/data';
import axios from 'axios';

const ProtocolRun = () => {
    // const { protocols, setProtocols } = useOutletContext();
    const [protocolInfo, setProtocolInfo] = useState({});

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
                const resp = await axios.post(`${HOST_URL}/api/protocol/find`, {
                    ...params
                }, {
                    headers: {
                        "x-access-token": user.accessToken
                    }
                });

                // console.log(resp.data);

                setProtocolInfo(resp.data);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();

    }, []);

    return (
        <section className='section-protocol-run'>
            <Link to={'description'}>Run protocol</Link>
            <Outlet context={{ protocolInfo }} />
            Name: {protocolInfo.name}
            Author: {protocolInfo.author}
            {/* <Link to={`/protocols/run/${protocolId}/preview`}>Preview</Link> */}
            <Link to={`preview`}>Preview</Link>
        </section>
    );
}

export default ProtocolRun;
