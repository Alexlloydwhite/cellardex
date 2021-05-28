// Used to store information of insight clicked, fill values in edit form
const insightById = (state = [], action) => {
    switch (action.type) {
        case 'SET_INSIGHT_EDIT':
            return {
                id: action.payload[0].id,
                user_id: action.payload[0].user_id,
                saved_pairing_id: action.payload[0].saved_pairing_id,
                wine_drank: action.payload[0].wine_drank,
                thoughts: action.payload[0].thoughts,
                location: action.payload[0].location,
                enjoyed_with: action.payload[0].enjoyed_with,
                image: action.payload[0].image
            }
        case 'EDIT_ONCHANGE':
            return {
                ...state,
                [action.payload.property]: action.payload.value
            }
        default:
            return state;
    }
}

export default insightById;