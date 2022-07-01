import React, { useState, useEffect } from 'react';
import { FormControl, FormHelperText, InputLabel, Input, Button, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { reset, login } from '../../features/auth/useSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            email,
            password
        }

        dispatch(login(userData));
    }

    return (loading ? <CircularProgress /> :
        <form style={{ display: 'flex', flexDirection: 'column', gap: 10 }} onSubmit={handleSubmit}>
            <FormControl >
                <InputLabel htmlFor="email-login">Email</InputLabel>
                <Input id="email-login" aria-describedby="helper-text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <FormHelperText id="helper-text">Helper text.</FormHelperText>
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="password-login">Password</InputLabel>
                <Input id="password-login" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button type='submit' variant="contained" style={{ alignSelf: 'center' }}>Login</Button>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p>Don't have an account?</p>
                <Link to={'/register'}>Sign up</Link>
            </div>
        </form>

    );
}

export default Login;
