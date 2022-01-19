import { put } from "redux-saga/effects";
import axios from "axios";

function* fetchPairingById(action) {
  // get pairing of id clicked
  try {
    const pairingClick = yield axios.get(`/api/pairing/${action.payload}`);
    // send data to reducer
    yield put({ type: "SET_CLICK", payload: pairingClick.data });
  } catch (err) {
    console.log(`In fetchPairingById saga, error getting click details ${err}`);
  }
}

export default fetchPairingById;
