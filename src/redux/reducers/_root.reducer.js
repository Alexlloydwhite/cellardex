import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import pairing from "./pairing.reducer";
import pairingClick from "./pairingClick.reducer";
import savedPairing from "./savedPairing.reducer";
import insights from "./insights.reducer";
import insightById from "./insightById.reducer";
import search from "./search.reducer";

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  search, // holds search results from server
  insightById, // holds information about insight based on id
  insights, // holds array of a users insights
  savedPairing, // holds array of a users saved pairings
  pairing, // array of pairings from database
  pairingClick, // details of pairing clicked on search view
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
});

export default rootReducer;
