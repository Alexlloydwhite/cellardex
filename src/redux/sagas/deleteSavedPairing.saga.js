import axios from 'axios';
import { put } from 'redux-saga/effects';

export default function* deleteSavedPairing(action) {
    try {
        yield axios.delete(`/api/delete-pairing/${action.id}`);
    } catch (error) {
        console.log(`IN deleteSavedPairing saga. ERROR deleting pairing with id of ${action.id}: ${error}`);
    }
}