import { put } from 'redux-saga/effects';
import axios from 'axios';

export default function* fetchSavedPairing() {
    try {
        const savedPairing = yield axios.get('/api/savedpairing');
        console.log(`IN fetchSavedPairing saga - response from GET request ${savedPairing.data}`);
        yield put({ type: 'SET_SAVED_PAIRING', payload: savedPairing.data });
    } catch (error) {
        console.log(`IN fetchSavedPairing saga - ERROR getting saved pairings: ${error}`);
    }
}