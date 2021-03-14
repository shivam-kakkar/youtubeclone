const initialState = [];

export const searchVideosReducer = (state = initialState, action) => {
  if (action.type === "add") {
    return action.payload;
  }
  return state;
};
