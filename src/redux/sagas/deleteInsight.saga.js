import axios from "axios";
import { put } from "redux-saga/effects";

export default function* deleteInsight(action) {
  try {
    yield axios.delete(`/api/insight/${action.id}`);
    yield put({ type: "FETCH_INSIGHTS" });
  } catch (error) {
    console.log(
      `IN deleteInsight saga. ERROR deleting insight with id of ${action.id}: ${error}`
    );
  }
}
