import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from './authService';

const localUser = JSON.parse(localStorage.getItem('user'));

// Register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const response = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(response)
    }
})


// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const response = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(response)
    }
})

// Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: localUser ? localUser : null,
        error: false,
        success: false,
        loading: false,
        response: ''
    },
    reducers: {
        reset: (state) => {
            state.error = false
            state.success = false
            state.loading = false
            state.response = ''
        },


    },
    extraReducers: (builder) => {
        builder
            // register
            .addCase(register.pending, (state) => {
                state.loading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false
                state.error = true
                state.response = action.payload
                state.user = null
            })
            // logout
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            })
            // login
            .addCase(login.pending, (state) => {
                state.loading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                state.error = true
                state.response = action.payload
                state.user = null
            })
    }
})

export const { reset } = authSlice.actions;

export default authSlice.reducer;