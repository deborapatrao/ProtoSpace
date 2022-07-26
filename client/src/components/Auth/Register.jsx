import React, { useState, useEffect } from 'react';
import { FormControl, FormHelperText, InputLabel, Input, Button, CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../../features/auth/useSlice';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const { user, loading, error, response } = useSelector((state) => state.auth)

    useEffect(() => {
        if (error) {
            console.log('Error: ', response);
        }

        dispatch(reset())

    }, [user, error, dispatch, response])


    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name: name,
            email: email,
            password: password
        }

        dispatch(register(userData))
        // popup: you are registered! congrats!
        navigate('/');

        console.log(userData);
    }

    return (loading ? <CircularProgress /> :
            <form style={{ display: 'flex', flexDirection: 'column', gap: 10 }} onSubmit={handleSubmit}>
                <h2>Sign up</h2>
                <p className={"welcome Sign-up"}>Accelerating the most efficient laboratory learning platform</p>
                <FormControl >
                    <label>
                        Name<span className={"mandatory"}>*</span>
                    </label>
                    {/*<InputLabel htmlFor="name-register">Name</InputLabel>*/}
                    <input id="name-register" value={name} onChange={(e) => setName(e.target.value)} placeholder={"Name"} />
                </FormControl>
                <FormControl >
                    <label>
                        Email<span className={"mandatory"}>*</span>
                    </label>
                    {/*<InputLabel htmlFor="email-register">Email</InputLabel>*/}
                    <input id="email-register" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Email"} />
                </FormControl>
                <FormControl >
                    <label>
                        Password<span className={"mandatory"}>*</span>
                    </label>
                    {/*<InputLabel htmlFor="password-register">Password</InputLabel>*/}
                    <input id="password-register" value={password} type={"password"} onChange={(e) => setPassword(e.target.value)} placeholder={"Password"}/>
                </FormControl>
                <FormControl >
                    <label>
                        Confirm Password<span className={"mandatory"}>*</span>
                    </label>
                    {/*<InputLabel htmlFor="password2-register">Confirm Password</InputLabel>*/}
                    <input id="password2-register" value={password2} type={"password"} onChange={(e) => setPassword2(e.target.value)} placeholder={"Confirm Password"}/>
                </FormControl>

                <Button type='submit' variant="contained" style={{ alignSelf: 'center' }}>Sign up</Button>
                <div style={{ display: 'flex', justifyContent: 'center' }} className={"login-container"}>
                    <p>Already have an account?</p>
                    <Link to={'/'}>Login</Link>
                </div>
            </form>
    );
}

export default Register;
