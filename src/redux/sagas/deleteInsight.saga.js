import axios from 'axios';

export default function* deleteInsight(action) {
    try {
        console.log(`IN deleteInsight saga. Delete insight with ID of ${action.id}`);
        yield axios.delete(`/api/insight/${action.id}`);
    } catch (error) {
        console.log(`IN deleteInsight saga. ERROR deleting insight with id of ${action.id}: ${error}`);
    }
}