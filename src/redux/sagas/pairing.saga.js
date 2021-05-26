import { put } from 'redux-saga/effects';
import axios from 'axios';

function* pairingSaga() {
    // get all pairings from the database
    try {
        const pairing = yield axios.get('/api/pairing');
        console.log('IN pairingSaga - response from get request:', pairing.data);
        yield put({ type: 'SET_PAIRING', payload: pairing.data });

    } catch {
        console.log('get all error');
    }
}

export default pairingSaga;