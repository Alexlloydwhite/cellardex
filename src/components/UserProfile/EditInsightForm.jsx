import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const EditInsightForm = ({ insightClicked }) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`clicked submit!`);
    }

    const [state, setState] = useState({
        wine_drank: insightClicked.wine_drank,
        thoughts: insightClicked.thoughts,
        location: insightClicked.location,
        enjoyed_with: insightClicked.enjoyed_with,
        image: insightClicked.image
    });
    
    const handleChange = (e) => {
        const value = e.target.value;
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: e.target.name, value: value }
        });
        setState({
            ...state,
            [e.target.name]: value
        });
    }
    
    return (
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
            {/* Wine Name */}
            <TextField
                margin="normal"
                fullWidth
                label="Wine Drank"
                name="wine_drank"
                value={state.wine_drank}
                onChange={handleChange}
                variant="outlined"
            />
            {/* Thoughts */}
            <TextField
                margin="normal"
                fullWidth
                multiline
                rows={4}
                label="Thoughts"
                name="thoughts"
                value={state.thoughts}
                onChange={handleChange}
                variant="outlined"
            />
            {/* Location */}
            <TextField
                margin="normal"
                fullWidth
                label="Location"
                name="location"
                value={state.location}
                onChange={handleChange}
                variant="outlined"
            />
            {/* Companion */}
            <TextField
                margin="normal"
                fullWidth
                label="Who did you enjoy this with?"
                name="enjoyed_with"
                value={state.enjoyed_with}
                onChange={handleChange}
                variant="outlined"
            />
            {/* Photo */}
            <TextField
                margin="normal"
                fullWidth
                label="Do you have a photo? Enter the image URL here"
                name="image"
                value={state.image}
                onChange={handleChange}
                variant="outlined"
                style={{ marginBottom: 15 }}
            />
            {/* cancel BTN, takes user back to profile view */}
            <Button
                color="secondary"
                variant="contained"
                style={{ marginRight: 5 }}
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

export default EditInsightForm;