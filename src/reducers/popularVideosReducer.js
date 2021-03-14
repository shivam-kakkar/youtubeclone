const initialState = [];

export const popularVideosReducer = (state = initialState, action) => {
  if (action.type === "HOME_VIDEOS") {
    return action.payload;
  }
  return state;
};
