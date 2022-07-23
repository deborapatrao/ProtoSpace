import React from 'react';
import './modal.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ChildModal from "./Modal";
import Close from './X.png';
import Upload from './Upload.png';
import Share from './share.png';
import {useParams} from "react-router-dom";
import { useState} from "react";


const  FirstModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const { protocolId } = useParams();
    const [protocolInfo, setProtocolInfo] = useState('');


    return (
        <>
           <Button variant={props.variantType} className={'modal-btn'} onClick={handleOpen} disabled={props.disInfo}>{props.buttonName}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box className={'modal-container'} sx={{  width: 400 }}>
                    <header>
                        <h5>{props.modalHeader}</h5>
                        <button className={"close-btn"} onClick={handleClose}><img className={"close-btn"}  onClick={handleClose} src={Close}/></button>
                    </header>
                    <div className={'modal-info'}>
                        {props.modalInfo}
                    </div>
                    <div className={"bottom-btn"}>
                        <button className={"close-btn"} onClick={handleClose}> Cancel</button>
                        <ChildModal
                            btnName={'Publish'}
                            childModalHeader={'Publish Protocol'}
                            childModalInfo={
                            <div className={'child-modal-info'}>
                                <img src={Upload} alt={'upload-image'} className={'upload-image'}/>
                                <p>{protocolInfo.name} has successfully been published</p>
                                <Button className={'run-protocol-btn'}>Run Protocol</Button>
                                <Button className={'share-btn'}><img src={Share} alt={'share-icon'}/>Share protocol</Button>
                                <Button className={'dashboard-btn'}>Back to Dashboard</Button>
                            </div>

                            }
                        >
                        </ChildModal>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
export default FirstModal;

