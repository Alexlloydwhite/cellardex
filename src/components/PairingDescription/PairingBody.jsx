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
import { useEffect, useState } from 'react';

const PairingBody = ({ item }) => {
    console.log(item);
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const savedPairing = useSelector(store => store.savedPairing);
    console.log(savedPairing);
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        dispatch({ type: 'GET_SAVED_PAIRING' });
        for (let i = 0; i < savedPairing.length; i++) {
            console.log('in loop');
            if (savedPairing[i].id === item.id) {
                setIsSaved(true);
                console.log('in if');
            }
        }
    }, []);

    // Send user to profile view
    // Save pairing to user
    const handleAddClick = (id) => {
        history.push('/search');
        dispatch({ type: 'POST_SAVED_PAIRING', userId: user.id, pairingId: id });
    }

    // Reset pairing click to initial state (none)
    // Then bring user to home view
    const handleBackClick = () => {
        dispatch({ type: 'RESET_CLICK' });
        history.push('/');
    }

    return (
        <Container style={{ marginBottom: 50 }}>
            {/* Pairing Description */}
            <Typography variant="h3" color="secondary">
                {item.food}{' & '}<br />
            </Typography>
            <Typography
                variant="h4"
                color="secondary"
                gutterBottom
            >
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
                onClick={handleBackClick}
                color="secondary"
                variant="contained"
                style={{ marginRight: 5 }}
            >
                Back
            </Button>
            {isSaved ?
                <Button
                    variant="contained"
                    disabled
                >
                    pairing already saved
                </Button>
                :
                /* Btn adds pairing to user's saved pairings, sends user to profile view */
                <Button
                    onClick={() => handleAddClick(item.id)}
                    color="primary"
                    variant="contained"
                >
                    Add to my pairings
                </Button>
            }
        </Container >
    );
}

export default PairingBody;