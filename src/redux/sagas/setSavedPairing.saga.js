import axios from 'axios';
import { put } from 'redux-saga/effects';

export default function* setSavedPairing(action) {
    try {
        yield axios.post('/api/savedpairing', {pairing_id: action.pairingId, user_id: action.userId });
        yield put({ type: 'GET_SAVED_PAIRING' });
    } catch (err) {
        console.log(`IN setSavedPairing saga! ERROR: ${err}`);
    }
}