import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    tab: 0,
    placeStatData: null, // {location, buildingName, address}
    currentBarName: null, 
    currentView: null, 
    // currentPlaceType: null, 
    multiStatData: null, 
    isLogedIn: false, 
    currentPage:'',
    toShow: false,
    latestClick: null,
  },
  getters: {
    getTab(state) {
      return state.tab;
    },
    getPlaceStatData(state) {
      return state.placeStatData;
    },
    getCurrentBarName(state) {
      return state.currentBarName;
    },
    // getCurrentPlaceType(state) {
    //   return state.currentPlaceType;
    // },
    getMultiStatData(state) {
      return state.multiStatData;
    },
    getIsLogedIn(state) {
      return state.isLogedIn;
    },
    getCurrentPage(state) {
      return state.currentPage;
    },
    getToShow(state) {
      return state.toShow;
    },
    getCurrentView(state) {
      return state.currentView;
    },
    getLatestClick(state) {
      return state.latestClick;
    },
  },
  mutations: {
    setTab(state, value) {
      state.tab = value;
    },
    setPlaceStatData(state, value) {
      state.placeStatData = value;
    },
    setCurrentBarName(state, value) {
      state.currentBarName = value;
    },
    // setCurrentPlaceType(state, value) {
    //   state.currentPlaceType = value;
    // },
    setMultiStatData(state, value) {
      state.multiStatData = value;
    },
    setIsLogedIn(state, value) {
      state.isLogedIn = value;
    },
    setCurrentPage(state, value) {
      state.currentPage = value;
    },
    setToShow(state, value) {
      state.toShow = value;
    },
    setCurrentView(state, value) {
      state.currentView = value; // level, location
    },
    setLatestClick(state, value) {
      state.latestClick = value; // level, location
    },
  }
});