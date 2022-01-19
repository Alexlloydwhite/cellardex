// Hold array of insights
const insights = (state = [], action) => {
  switch (action.type) {
    case "SET_INSIGHTS":
      return action.payload;
    default:
      return state;
  }
};

export default insights;
