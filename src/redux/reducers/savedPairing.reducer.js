const savedPairing = (state = [], action) => {
    switch (action.type) {
        case 'SET_SAVED_PAIRING':
            return action.payload;
        default:
            return state;
    }
}

export default savedPairing;