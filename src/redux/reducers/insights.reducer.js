// Hold array of insights 
const insights = (state = [], action) => {
    switch(action.type) {
        case 'SET_INSIGHT':
            return action.payload;
        default:
            return state;
    }
}

export default insights;