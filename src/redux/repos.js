import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import storeInitialState from "./storeInitialState";
import axios from "axios";

export const fetchRepos = createAsyncThunk(
  "reposData/fetchRepos",
  async (page) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc&page=s${
          page || 1
        }`
      );
      return { ...response.data, ...page };
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return isRejectedWithValue(err.response.data);
    }
  }
);

export const reposSlice = createSlice({
  name: "reposData",
  initialState: storeInitialState.reposData,
  extraReducers: {
    setFetchedRepoPageInExplore: (state, action) => {
      state.page = action.payload;
    },
    viewReposNum: (state, action) => {
      state.viewExploreNum = action.payload;
      state.viewExploreRepos = state.repos?.slice(0, action.payload);
    },

    [fetchRepos.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRepos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.viewExploreRepos = state.repos?.slice(0, state.viewExploreNum);
      if (state?.page > 1 && state.repos < state.viewExploreNum) {
        state.repos = [...state.repos, ...action.payload.items];
      } else {
        state.repos = [...action.payload.items];
      }
    },
    [fetchRepos.rejected]: (state, action) => {
      debugger;
      state.isLoading = false;
    },
  },
});

export const { setFetchedRepoPageInExplore } = reposSlice.actions;

export default reposSlice.reducer;
