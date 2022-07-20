import { createSlice } from '@reduxjs/toolkit'
import storeInitialState from "./storeInitialState";

export const appStateSlice = createSlice({
    name: 'appState',
    initialState: storeInitialState.appState ,
    reducers: {
        appLoaded: (state, action) => {
            state.isLoaded = true
        },
        appTheme: (state, action) => {
            state.appTheme = action.payload
        },
    },
})

export const { appLoaded, appTheme } = appStateSlice.actions

export default appStateSlice.reducer
