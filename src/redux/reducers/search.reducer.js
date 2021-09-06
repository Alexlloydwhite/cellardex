const searchReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
