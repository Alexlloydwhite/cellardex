const search = (state=[], action) => {
    console.log(`IN search reducer!`);
    switch(action.type) {
        case 'SET_SEARCH':
            return action.payload;
        default:
            return state
    }
}

export default search;