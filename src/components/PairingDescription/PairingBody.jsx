// MUI
import { 
    Typography,
    Button,
    Container,
    Divider
} from '@material-ui/core';
// React
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

const PairingBody = ({ item }) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)

    const handleAddClick = (id) => {
        console.log('Clicked! Add to my pairings btn');
        // send user to profile view
        history.push('/profile');
        // Save pairing to user
        dispatch({ type: 'POST_SAVED_PAIRING', userId: user.id, pairingId: id });
    }

    return (
        <Container>
            {/* Pairing Description */}
            <Typography variant="h3" color="secondary">
                {item.food}{' & '}<br />
            </Typography>
            <Typography variant="h4" color="secondary">
                {item.wine}
            </Typography>
            <Divider />
            <Typography
                style={{ marginBottom: 15, marginTop: 15 }}
                variant="h5"
            >
                {item.description}
            </Typography>
            {/* Back button takes user back home*/}
            <Button
                onClick={() => history.push('/')}
                color="secondary"
                variant="contained"
                style={{ marginRight: 5 }}
            >
                Back
            </Button>
            {/* Btn adds pairing to user's saved pairings, sends user to profile view */}
            <Button
                onClick={() => handleAddClick(item.id)}
                color="primary"
                variant="contained"
            >
                Add to my pairings
            </Button>
        </Container>
    );
}

export default PairingBody;