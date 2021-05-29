// Used to store information of insight clicked, fill values in edit form
const insightById = (state = [], action) => {
    switch (action.type) {
        case 'SET_INSIGHT_EDIT':
            return {
                id: action.payload.id,
                user_id: action.payload.user_id,
                saved_pairing_id: action.payload.saved_pairing_id,
                wine_drank: action.payload.wine_drank,
                thoughts: action.payload.thoughts,
                location: action.payload.location,
                enjoyed_with: action.payload.enjoyed_with,
                image: action.payload.image
            }
        case 'EDIT_ONCHANGE':
            return {
                ...state,
                [action.payload.property]: action.payload.value
            }
        case 'RESET_EDIT':
            return state;
        default:
            return state;
    }
}

export default insightById;