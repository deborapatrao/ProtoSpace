import React from 'react';
import './modal.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ChildModal from "./Modal";
import Close from './X.png';
import Upload from './Upload.png';
import Share from './share.png';
import { useParams } from "react-router-dom";
import { useState } from "react";


const NewModal = (props) => {


    return (
        <Modal
            open={props.open}
            // onClose={props.handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box className={'modal-container'} sx={{ width: 400 }}>
                <header>
                    <h5>{props.modalHeader}</h5>
                    <button className={"close-btn"} onClick={props.handleClose}><img className={"close-btn"} onClick={props.handleClose} src={Close} alt="close" /></button>
                </header>
                <div className={'modal-info'}>
                    {props.children}
                </div>
            </Box>
        </Modal>
    );
}
export default NewModal;

