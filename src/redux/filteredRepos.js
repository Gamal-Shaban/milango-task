import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import storeInitialState from "./storeInitialState";
import axios from "axios";
import moment from "moment";

export const fetchReposWitDate = createAsyncThunk(
  "reposData/fetchRepos",
  async ({ date, page }) => {
    try {
      const today = moment().format("YYYY-MM-DD");
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=created:${
          date || today
        }&sort=stars&order=desc&page=${page || 1}}&per_page=100`
      );
      // dispatch(setFetchedRepoPage(page));
      return { ...response.data, ...page };
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return isRejectedWithValue(err.response.data);
    }
  }
);

export const filteredReposSlice = createSlice({
  name: "filteredRepos",
  initialState: storeInitialState.filteredRepos,
  reducers: {
    setFetchedRepoPage: (state, action) => {
      state.page = action.payload;
    },
    sortByLang: (state, action) => {
      state.viewReposWithSort = state.payload.filter(
        (i) => i.language === action.payload
      );
    },
    extraReducers: {
      [fetchReposWitDate.pending]: (state) => {
        state.isLoading = true;
      },
      [fetchReposWitDate.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.page = action.payload.page;
        state.dayReposData = [...action.payload];
        if (state.language === "any") {
          state.viewReposWithSort = [...action.payload];
        } else {
          state.viewReposWithSort = state.payload.filter(
            (i) => i.language === state.language
          );
        }
      },
      [fetchReposWitDate.rejected]: (state) => {
        state.isLoading = false;
      },
    },
  },
});

export const { sortByLang, setFetchedRepoPage } = filteredReposSlice.actions;

export default filteredReposSlice.reducer;
