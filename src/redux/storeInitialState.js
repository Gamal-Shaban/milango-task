const initialStates = {
  appState: {
    isLoaded: false,
    appTheme: null,
  },
  reposData: {
    isLoading: true,
    repos: [],
    page: 1,
    viewExploreNum: 10,
    viewExploreRepos: [],
  },

  filteredRepos: {
    isLoading: true,
    dayReposData: [],
    viewReposWithSort: [],
    language: "any",
    page: 1,
  },
};

export default initialStates;
