import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
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
        dispatch({ type: 'SET_SAVED_PAIRING', userId: user.id, pairingId: id });
    }

    return (
        <Container style={{ marginTop: 50, marginBottom: 25 }}>
            {/* Pairing Description */}
            <Typography 
                style={{ marginBottom: 15 }}
                variant="h5"
            >
                {item.description}
            </Typography>
            {/* Back button takes user back home*/}
            <Button
                onClick={() => history.push('/')}
                color="Secondary"
                variant="contained"
                style={{marginRight: 5}}
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