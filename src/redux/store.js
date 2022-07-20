import { configureStore } from '@reduxjs/toolkit'
import appStateSlice from "./appState";

export const store = configureStore({
    reducer: {
        appState: appStateSlice
    },
})
