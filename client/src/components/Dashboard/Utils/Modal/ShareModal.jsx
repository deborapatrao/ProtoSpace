import React from 'react';
import './modal.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Close from './X.png';
import Upload from './Upload.png';
import Share from './share.png';


const ShareModal = (props) => {

    return (
        <Modal
            open={props.open}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box className={'modal-container'} sx={{ width: 400 }}>
                <header className={'modal-header'}>
                    <h5>{props.modalHeader}</h5>
                    <button className={"close-btn"}><Link to={'/'}><img className={"close-btn"} src={Close} alt="close" /></Link></button>
                </header>
                <div className={'child-modal'}>
                    <div className={'modal-info'}>
                        {props.children}
                    </div>
                </div>
            </Box>
        </Modal>
    );
}
export default ShareModal;

