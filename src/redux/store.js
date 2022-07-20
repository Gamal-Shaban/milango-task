import { configureStore } from '@reduxjs/toolkit'
import appStateSlice from "./appState";
import reposSlice from "./repos";
import filteredRepos from "./filteredRepos";

export const store = configureStore({
    reducer: {
        appState: appStateSlice,
        reposData: reposSlice,
        filteredRepos ,
    },
})
