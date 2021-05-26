import { all, takeEvery } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import pairingSaga from './fetchPairing.saga';
import getPairingById from './fetchPairingById.saga';
import setSavedPairing from './setSavedPairing.saga';
import fetchSavedPairing from './fetchSavedPairing.saga';

// This is imported in index.js as rootSaga
export default function* rootSaga() {
  yield takeEvery('FETCH_PAIRING', pairingSaga);
  yield takeEvery('SET_PAIRING_CLICK', getPairingById);
  yield takeEvery('POST_SAVED_PAIRING', setSavedPairing);
  yield takeEvery('GET_SAVED_PAIRING', fetchSavedPairing);
  // the registration triggers a login
  // and login triggers setting the user
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
  ]);
}
