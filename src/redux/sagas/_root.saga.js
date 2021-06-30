import { all, takeEvery } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import fetchPairing from './fetchPairing.saga';
import getPairingById from './fetchPairingById.saga';
import setSavedPairing from './setSavedPairing.saga';
import fetchSavedPairing from './fetchSavedPairing.saga';
import postInsight from './postInsight.saga';
import fetchInsights from './fetchInsights.saga';
import deleteInsight from './deleteInsight.saga';
import fetchInsightById from './fetchInsightById.saga';
import editInsight from './editInsight.saga';
import search from './search.saga';

// This is imported in index.js as rootSaga
export default function* rootSaga() {
  yield takeEvery('FETCH_SEARCH', search);
  yield takeEvery('EDIT_INSIGHT', editInsight);
  yield takeEvery('DELETE_INSIGHT', deleteInsight);
  yield takeEvery('FETCH_INSIGHTS', fetchInsights);
  yield takeEvery('POST_INSIGHT', postInsight);
  yield takeEvery('FETCH_PAIRING', fetchPairing);
  yield takeEvery('SET_PAIRING_CLICK', getPairingById);
  yield takeEvery('POST_SAVED_PAIRING', setSavedPairing);
  yield takeEvery('GET_SAVED_PAIRING', fetchSavedPairing);
  yield takeEvery('FETCH_INSIGHT_BY_ID', fetchInsightById);
  // the registration triggers a login
  // and login triggers setting the user
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
  ]);
}
