import axios from "axios";
import { put } from "redux-saga/effects";

export default function* deleteSavedPairing(action) {
  try {
    yield axios.delete(`/api/savedpairing/${action.id}`);
    yield put({ type: "GET_SAVED_PAIRING" });
  } catch (error) {
    console.log(
      `IN deleteSavedPairing saga. ERROR deleting pairing with id of ${action.id}: ${error}`
    );
  }
}
