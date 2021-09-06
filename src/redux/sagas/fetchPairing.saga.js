import { put } from "redux-saga/effects";
import axios from "axios";

export default function* fetchPairing() {
  // get all pairings from the database
  try {
    const pairing = yield axios.get("/api/pairing");
    yield put({ type: "SET_PAIRING", payload: pairing.data });
  } catch {
    console.log("get all error");
  }
}
