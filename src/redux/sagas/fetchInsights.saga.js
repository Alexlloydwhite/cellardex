import { put } from "redux-saga/effects";
import axios from "axios";

export default function* fetchInsights() {
  // get all insights from the database
  try {
    const insight = yield axios.get("/api/insight");
    yield put({ type: "SET_INSIGHTS", payload: insight.data });
  } catch {
    console.log("IN fetchInsights, get all error");
  }
}
