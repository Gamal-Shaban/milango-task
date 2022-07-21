import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import storeInitialState from "./storeInitialState";
import axios from "axios";
import moment from "moment";

export const fetchReposWitDate = createAsyncThunk(
  "reposData/fetchReposWitDate",
  async ({ date, page }, { dispatch }) => {
    try {
      const today = moment().format("YYYY-MM-DD");
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=created:${
          date || today
        }&sort=stars&order=desc&page=${page || 1}}&per_page=100`
      );
      dispatch(setFetchedRepoPage(page));
      console.log("response.data>>>", response.data);
      return response.data;
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
      state.language = action.payload.toLowerCase();
      if (action.payload === "Any") {
        state.viewReposWithSort = state.dayReposData;
      } else {
        state.viewReposWithSort = state.dayReposData?.filter(
          (i) => i.language?.toLowerCase() === action.payload?.toLowerCase()
        );
      }
    },
  },
  extraReducers: {
    [fetchReposWitDate.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchReposWitDate.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dayReposData = action.payload.items;
      if (state.language === "Any") {
        state.viewReposWithSort = action.payload.items;
      } else {
        state.viewReposWithSort = action.payload.items?.filter((i) => {
          return i.language?.toLowerCase() === state.language?.toLowerCase();
        });
      }
    },
    [fetchReposWitDate.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { sortByLang, setFetchedRepoPage, setFetchedRepoData } =
  filteredReposSlice.actions;

export default filteredReposSlice.reducer;
