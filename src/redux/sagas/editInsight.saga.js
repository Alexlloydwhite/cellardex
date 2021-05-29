import axios from 'axios';
// Send put request to edit insight
export default function* editInsight(action) {
    try {
        console.log(`IN editInsight Saga!`);
        yield axios.put(
            `/api/insight/${action.id}`,{
                wine_drank: action.wine_drank,
                thoughts: action.thoughts,
                location: action.location,
                enjoyed_with: action.enjoyed_with,
                image: action.image
            });
    } catch (error) {
        console.log(`IN editInsight saga. ERROR on put request. ${error}`);
    }
}