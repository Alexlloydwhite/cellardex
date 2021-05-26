import { all, takeEvery } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import pairingSaga from './fetchPairing.saga';
import getPairingById from './fetchPairingById.saga';
import setSavedPairing from './setSavedPairing.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield takeEvery('FETCH_PAIRING', pairingSaga);
  yield takeEvery('SET_PAIRING_CLICK', getPairingById);
  yield takeEvery('SET_SAVED_PAIRING', setSavedPairing);
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
  ]);
}
