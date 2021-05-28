import { put } from 'redux-saga/effects';
import axios from 'axios';

export default function* fetchInsightById(action) {
    // Get insight based on ID
    try {
        const insightClicked = yield axios.get(`/api/insight/:id`);
        console.log(`IN fetchInsightById - response from the GET request: ${insightClicked}`);
        yield put({ type: 'SET_INSIGHT_EDIT', payload: insightClicked.data })
    } catch (error) {
        console.log(`ERROR in fetchInsightById: ${error}`);
    }
}