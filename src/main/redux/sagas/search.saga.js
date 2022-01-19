import { put } from "@redux-saga/core/effects";
import axios from "axios";

export default function* search(action) {
  try {
    // GET search results, set to const searchResults
    const searchResults = yield axios.get(`/api/search/${action.search}`);
    // Dispatch to search reducer
    yield put({ type: "SET_SEARCH", payload: searchResults.data });
  } catch (error) {
    console.log(`IN search saga. !~ERROR~! ${error}`);
  }
}
