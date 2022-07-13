import React from 'react';
import {
    Link
} from "react-router-dom";
import { TextField } from '@mui/material';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Button from '@mui/material/Button';
import {useEffect} from "react";
import axios from "axios";
import {HOST_URL} from "../../data/data";


const Profile = () => {


    useEffect(() => {
        async function fetchData() {
            const user = JSON.parse(localStorage.getItem('user'));

            const params = {
                id: user.id
            }

            try {
                const resp = await axios.post(`${HOST_URL}/api/users/profile/`, {
                    ...params
                }, {
                    headers: {
                        "x-access-token": user.accessToken
                    }
                });

                console.log(resp);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])



    return <>
        <section>
            <h1>Profile</h1>
            <div className={"image-container"}>
                <img src={"user.image"} />
                <button><CameraAltIcon /> Change profile </button>
            </div>
            <div className={"user-info-container"}>
                <h3>Your information</h3>
                <div>Last Update: <span>{"user.update_at"}</span></div>
                <div><span className={"mandatory"}>*</span> This section need to be filled</div>
                <div className={"user-info-fields"}>
                    <div>
                        <label>First Name<span className={"mandatory-desc"}>*</span></label>
                        <TextField type={'text'} value={"user.name"}/>
                    </div>
                    <div>
                        <label>Last Name<span className={"mandatory-desc"}>*</span></label>
                        <TextField type={'text'} value={"user.name"}/>
                    </div>
                    <div>
                        <label>Email<span className={"mandatory-desc"}>*</span></label>
                        <TextField type={'text'} value={"user.email"}/>
                    </div>
                </div>
                <div className={"password-fields"}>
                    <div>
                        <label>Password<span className={"mandatory-desc"}>*</span></label>
                        <TextField type={'password'} value={"user.password"}/>
                    </div>
                    <div>
                        <label>New Password<span className={"mandatory-desc"}>*</span></label>
                        <TextField type={'password'} value={"user.password"}/>
                    </div>
                    <div>
                        <label>Confirm New Password<span className={"mandatory-desc"}>*</span></label>
                        <TextField type={'password'} value={"user.password"}/>
                    </div>
                </div>
            </div>
            <Button variant={"contained"}>Cancel</Button>
            <Button variant={"outlined"}>Update</Button>
        </section>
    </>
}
export default Profile;