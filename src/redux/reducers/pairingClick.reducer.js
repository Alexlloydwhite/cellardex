// stores the details of pairing click
const pairingClick = (state =[], action) => {
    switch(action.type) {
        case 'SET_CLICK':
            return action.payload;
        case 'RESET_CLICK':
            return state;
        default:
            return state;
    }
}
export default pairingClick;