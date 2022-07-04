import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TableComponent = () => {
    // Example data from API:
    const [protocols, setProtocols] = useState([{
        name: 'protocol 1',
        abstract: '',
        author: 'author name',
        disclaimer: '',
        guideline: '',
        before_start: '',
        safety_warning: '',
        materials: '',
        steps: [{ id: 1, name: 'step1', text: '' }, { id: 1, name: 'step1', text: '' }],
        created_at: '2022-07-03T04:38:50.000Z'
    }]);

    return (
        <>
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
                                    <TableCell align="left">{item.name}</TableCell>
                                    <TableCell align="left">{item.author}</TableCell>
                                    <TableCell align="left">{item.created_at}</TableCell>
                                    <TableCell align="left">v1.0</TableCell>
                                </TableRow>
                            )
                        }) : ''}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default TableComponent;
