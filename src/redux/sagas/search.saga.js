import { put } from '@redux-saga/core/effects';
import axios from 'axios';

export default function* search(action) {
    try {
        // Log of bug searching :)
        console.log(`IN search saga. Search for: ${action.search}`);
        // GET search results, set to const searchResults
        const searchResults = yield axios.get(`/api/search/${action.search}`);
        yield put({ type: 'SET_SEARCH', payload: searchResults.data });
    } catch (error) {
        console.log(`IN search saga. !~ERROR~! ${error}`);
    }
}