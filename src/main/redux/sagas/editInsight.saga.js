import axios from "axios";
// Send put request to edit insight
export default function* editInsight(action) {
  try {
    yield axios.put(`/api/insight/${action.id}`, {
      wine_drank: action.wine_drank,
      thoughts: action.thoughts,
      location: action.location,
      enjoyed_with: action.enjoyed_with,
      image: action.image,
    });
    yield put({ type: "REST_EDIT" });
  } catch (error) {
    console.log(`IN editInsight saga. ERROR on put request. ${error}`);
  }
}
