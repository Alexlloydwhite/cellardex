// used to store pairings from the saga
const pairing = (state = [], action) => {
  switch (action.type) {
    case "SET_PAIRING":
      return action.payload;
    default:
      return state;
  }
};

export default pairing;
