import { createStore, combineReducers } from "redux";
import { searchVideosReducer } from "./reducers/searchVideosReducer";
import { themeReducer } from "./reducers/themeReducer";
import { popularVideosReducer } from "./reducers/popularVideosReducer";

const rootReducer = combineReducers({
  cardData: searchVideosReducer,
  myDarkMode: themeReducer,
  popularVideos: popularVideosReducer,
});

const store = createStore(rootReducer);

export default store;
