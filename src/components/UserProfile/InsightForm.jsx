import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const InsightForm = () => {
    const history = useHistory();
    const classes = useStyles();
    const params = useParams();
    const dispatch = useDispatch();
    // State for form inputs
    const [wineName, setWineName] = useState('');
    const [thoughts, setThoughts] = useState('');
    const [location, setLocation] = useState('');
    const [companion, setCompanion] = useState('');
    const [photo, setPhoto] = useState('');
    // user data from store
    const user = useSelector(store => store.user);
    // pairing clicked data from store
    const pairingClicked = useSelector(store => store.pairingClick);
    // Clicked handle for submit insight
    const handleSubmit = (event) => {
        event.preventDefault();
        // send form data to the postInsight saga
        dispatch({ 
            type: 'POST_INSIGHT', 
            user_id: user.id, 
            saved_pairing_id: Number(params.id), 
            wine: wineName, 
            thoughts: thoughts,
            location: location,
            enjoyed_with: companion,
            image: photo,
        });
        // Bring use to the profile view
        history.push('/profile');
    }

    return (
        // New Insight Form
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
            {/* Wine Name */}
            <TextField
                margin="normal"
                fullWidth
                required
                label="What bottle of wine did you drink?"
                helperText="Include both vintage and name of producer"
                value={wineName}
                onChange={(event) => setWineName(event.target.value)}
                variant="outlined"
            />
            {/* Thoughts */}
            <TextField
                margin="normal"
                fullWidth
                required
                label="Thoughts on pairing?"
                multiline
                rows={4}
                value={thoughts}
                onChange={(event) => setThoughts(event.target.value)}
                variant="outlined"
            />
            {/* Location */}
            <TextField
                margin="normal"
                fullWidth
                required
                label="Location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                variant="outlined"
            />
            {/* Companion */}
            <TextField
                margin="normal"
                fullWidth
                required
                label="Who did you enjoy this with?"
                value={companion}
                onChange={(event) => setCompanion(event.target.value)}
                variant="outlined"
            />
            {/* Photo */}
            <TextField
                margin="normal"
                fullWidth
                required
                label="Do you have a photo? Enter the image URL here"
                value={photo}
                onChange={(event) => setPhoto(event.target.value)}
                variant="outlined"
                style={{marginBottom: 15}}
            />
            {/* cancel BTN, takes user back to profile view */}
            <Button
                color="secondary"
                variant="contained"
                style={{marginRight: 5}}
                onClick={() => history.push('/profile')}
            >
                Cancel
            </Button>
            {/* Submit BTN, takes user back to profile view */}
            <Button
                color="primary"
                variant="contained"
                type="submit"
            >
                Submit Insight
            </Button>
        </form>
    );
}

export default InsightForm;