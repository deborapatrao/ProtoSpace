import React, {useState, useEffect} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';
import {HOST_URL} from '../../../data/data';
import {useParams} from 'react-router-dom'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Index = () => {
    const [labels, setLabels] = useState([]);
    const [steps, setSteps] = useState([]);
    const [maxSteps, setMaxSteps] = useState(0);
    const {protocolId} = useParams();

    useEffect(() => {
        async function fetchData() {
            const user = JSON.parse(localStorage.getItem('user'));

            const params = {
                protocol_id: protocolId
            }

            try {
                const resp = await axios.post(`${HOST_URL}/api/chart/steps`, {
                    ...params
                }, {
                    headers: {
                        "x-access-token": user.accessToken
                    }
                });

                console.log(resp.data);
                let names = [];
                let steps = []

                resp.data.map((item, index) => {
                    names.push(item.name_user)
                    steps.push(Number(item.steps))
                })

                setLabels(names);
                setSteps(steps);
                setMaxSteps(resp.data[0].max_steps)
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])


    const data = {
        labels,
        datasets: [
            {
                label: 'Steps',
                data: labels.map((item, index) => steps[index]),
                backgroundColor: 'rgb(36, 156, 243)',
                stack: 'Stack 0',
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                // borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Experiment Progress - Section 1',
            },
        }, scales: {
            x: {
                min: 0,
                max: maxSteps
            }
        }

    };

    return (
        <div>
            <div>protocol ID: {protocolId}</div>
            <Bar options={options} data={data}/>
        </div>
    );
}

export default Index;
