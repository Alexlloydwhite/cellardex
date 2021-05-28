// Used to store information of insight clicked, fill values in edit form
const insightById = (state = [], action) => {
    switch (action.type) {
        case 'SET_INSIGHT_EDIT':
            return action.payload;
        default:
            return state;
    }
}

export default insightById;