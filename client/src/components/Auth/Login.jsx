import React, { useState, useEffect } from 'react';
import { TextField, FormControl, FormHelperText, InputLabel, Input, Button } from '@mui/material';
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
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
