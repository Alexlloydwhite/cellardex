import axios from 'axios';

// Sends data from create new insight form to the server
export default function* postInsight(action) {
    try {
        yield axios.post('/api/insight', {
            user_id: action.user_id,
            saved_pairing_id: action.saved_pairing_id,
            wine: action.wine,
            thoughts: action.thoughts,
            location: action.location,
            enjoyed_with: action.enjoyed_with,
            image: action.image
        });
    } catch (error) {
        console.log(`IN postInsight saga, error adding new insight! ${error}`);
    }
}