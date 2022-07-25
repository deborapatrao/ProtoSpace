import React from 'react';
import './modal.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Close from "./X.png";
import axios from "axios";
import { HOST_URL } from "../../../../data/data";


const ChildModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Button onClick={handleOpen}>{props.btnName}</Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box className={'child-modal'} sx={{ width: 200 }}>
                    <header>
                        <h5>{props.childModalHeader}</h5>
                        <button className={"close-btn"} onClick={handleClose}><img className={"close-btn"} onClick={handleClose} src={Close} /></button>
                    </header>

                    {props.childModalInfo}

                </Box>
            </Modal>
        </React.Fragment>
    );
}
export default ChildModal;
// export default function NestedModal(props) {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => {
//         setOpen(true);
//     };
//     const handleClose = () => {
//         setOpen(false);
//     };
//
//     return (
//         <div>
//             <Button onClick={handleOpen}>{props.buttonName}</Button>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="parent-modal-title"
//                 aria-describedby="parent-modal-description"
//             >
//                 <Box sx={{ ...style, width: 400 }}>
//                     <h2 id="parent-modal-title">Text in a modal</h2>
//                     <p id="parent-modal-description">
//                         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//                     </p>
//                     <ChildModal />
//                 </Box>
//             </Modal>
//         </div>
//     );
// }

