import React, { useEffect, useState } from 'react';
import { useParams, useOutletContext, Link } from 'react-router-dom';
import axios from 'axios';
import { HOST_URL } from '../../../data/data';


const Summary = () => {
    const { protocolId } = useParams();
    const [protocolInfo, setProtocolInfo] = useState();

    useEffect(() => {
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


                setProtocolInfo(resp.data);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])

    return (
        <section className={"preview"}>
            summary
            {/* <div style={{ marginBottom: 30, paddingLeft: 30, paddingTop: 30 }}>
                <div className={"description-title"}>
                    <h4 >Summary</h4>
                </div>
                <div>Date run: {new Date().toDateString()}</div>
                <div>Time: </div>
                <div>Run by: {JSON.parse(localStorage.getItem('user')).name}</div>
                <div>Owner: {protocolInfo.author}</div>
            </div>

            <div className={'sectionTitle'}>
                <h4>Description</h4>
            </div>
            <div className={'description'}>
                <h6>Protocol Name</h6>
                <p type={'text'}>{protocolInfo.name}</p>
                <h6>Abstract</h6>
                <p type={'text'}>{protocolInfo.abstract}</p>
                <h6>Author</h6>
                <p type={'text'}>{protocolInfo.author}</p>
                <h6>Disclaimer</h6>
                <p type={'text'}>{protocolInfo.disclaimer}</p>
            </div>

            <div className={'sectionTitle'}>
                <h4>Guidelines</h4>
            </div>
            <div className={'guidelines'}>
                <h6>Guidelines</h6>
                <p type={'text'}>{protocolInfo.guideline}</p>
                <h6>Before start</h6>
                <p type={'text'}>{protocolInfo.before_start}</p>
                <h6>Safety warnings</h6>
                <p type={'text'}>{protocolInfo.safety_warning}</p>
                <h6>
                    Confidentially policy
                </h6>
                <div className={"confidentially-options"}>
                    <span>Sensitive content warning</span>
                    <span>Confidential</span>
                </div>
            </div>

            <div className={'sectionTitle'}>
                <h4>Material</h4>
            </div>
            <div className={'materials'}>
                <h6>List of materials</h6>
                <p type={'text'}>{protocolInfo.materials}</p>
            </div> */}
        </section>
    );
}

export default Summary;
