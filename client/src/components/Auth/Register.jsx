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
            <FormControl >
                <InputLabel htmlFor="name-register">Name</InputLabel>
                <Input id="name-register" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="email-register">Email</InputLabel>
                <Input id="email-register" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="password-register">Password</InputLabel>
                <Input id="password-register" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="password2-register">Confirm Password</InputLabel>
                <Input id="password2-register" type='password' value={password2} onChange={(e) => setPassword2(e.target.value)} />
            </FormControl>

            <Button type='submit' variant="contained" style={{ alignSelf: 'center' }}>Register</Button>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p>Already have an account?</p>
                <Link to={'/'}>Login</Link>
            </div>
        </form>
    );
}

export default Register;
