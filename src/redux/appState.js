import { createSlice } from '@reduxjs/toolkit'
import storeInitialState from "./storeInitialState";

export const appStateSlice = createSlice({
    name: 'appState',
    initialState: storeInitialState.appState ,
    reducers: {
        appLoaded: (state, action) => {
            state.isLoaded = true
        },
    },
})

// Action creators are generated for each case reducer function
export const { appLoaded } = appStateSlice.actions

export default appStateSlice.reducer
