import axios from 'axios';

export default function* setSavedPairing(action) {
    try {
        yield axios.post('/api/pairing', {pairing_id: action.pairingId, user_id: action.userId });
    } catch (err) {
        console.log(`IN setSavedPairing saga! ERROR: ${err}`);
    }
}