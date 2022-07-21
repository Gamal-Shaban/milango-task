import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import storeInitialState from "./storeInitialState";
import axios from "axios";

export const fetchRepos = createAsyncThunk(
  "reposData/fetchRepos",
  async (page, {dispatch}) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc&per_page=100`
      );
      dispatch(setFetchedRepoPageInExplore(page))
      return response.data ;
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
  reducers: {

    setFetchedRepoPageInExplore: (state, action) => {
      state.page = action.payload;
    },
    viewReposNum: (state, action) => {
      state.viewExploreNum = action.payload;
      state.viewExploreRepos = state.repos?.slice(0, action.payload);
    },
  },

  extraReducers: {
      [fetchRepos.pending]: (state) => {
        state.isLoading = true;
      },
      [fetchRepos.fulfilled]: (state, action) => {
        state.isLoading = false;
        if (state?.page > 1 && state.repos < state.viewExploreNum) {
          state.repos = [...state.repos, ...action.payload.items]
        } else {
          state.repos = [...action.payload.items]
        }
          state.viewExploreRepos = state.repos?.slice(0, state.viewExploreNum);

      },
      [fetchRepos.rejected]: (state, action) => {
        debugger;
        state.isLoading = false;
      },
  }
});

export const { setFetchedRepoPageInExplore, viewReposNum } = reposSlice.actions;

export default reposSlice.reducer;
