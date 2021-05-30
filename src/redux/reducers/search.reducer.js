const searchReducer = (state = [], action) => {
    console.log(`IN search reducer! ${action.payload}`); 
    switch (action.type) {
        case 'SET_SEARCH':
            return action.payload;
        default:
            return state
    }
}

export default searchReducer;