import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../auth/useSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})