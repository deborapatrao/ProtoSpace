import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HOST_URL } from '../../../data/data';

const TableComponent = () => {
    const [protocols, setProtocols] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const user = JSON.parse(localStorage.getItem('user'));

            const params = {
                workspaceId: user.workspaceId[0][0].workspaceId
            }

            try {
                const resp = await axios.post(`${HOST_URL}/api/protocol/find/byworkspace`, {
                    ...params
                }, {
                    headers: {
                        "x-access-token": user.accessToken
                    }
                });

                console.log(resp);

                setProtocols(resp.data)

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])

    return (
        <>
            <h1>My Workspace</h1>
            {protocols.length > 0 ?
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Owner</TableCell>
                                <TableCell align="left">Last Modified</TableCell>
                                <TableCell align="left">Version</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {protocols ? protocols.map((item, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell align="left"><Link to={`protocols/run/${item.protocol_id}`}>{item.name}</Link></TableCell>
                                        <TableCell align="left">{item.author}</TableCell>
                                        <TableCell align="left">{new Date(item.created_at).toLocaleString("en-US")}</TableCell>
                                        <TableCell align="left">v1.0</TableCell>
                                    </TableRow>
                                )
                            }) : ''}

                        </TableBody>
                    </Table>
                </TableContainer>
                : ''}
            <div className="workspace__body">
                <Button variant="outlined">
                    <Link to={"/protocols/description"}>+ Create protocol</Link>
                </Button>
            </div>
        </>
    );
}

export default TableComponent;
