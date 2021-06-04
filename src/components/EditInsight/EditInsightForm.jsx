// MUI
import { 
    makeStyles,
    TextField,
    Button, 
} from '@material-ui/core';
// React
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// Styles
const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const EditInsightForm = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    // Reducer holds data for the insight to edit
    const insightClicked = useSelector(store => store.insightById);
    // Allows the page to persist through refresh
    useEffect(() => {
        dispatch({ type: 'FETCH_INSIGHT_BY_ID', id: params.id });
    }, []);
    // handle form submit. Dispatch edit to post. 
    // Bring user back to profile view
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'EDIT_INSIGHT',
            id: insightClicked.id,
            wine_drank: insightClicked.wine_drank,
            thoughts: insightClicked.thoughts,
            location: insightClicked.location,
            enjoyed_with: insightClicked.enjoyed_with,
            image: insightClicked.image
        });
        history.push('/profile');
    }
    // Hold state of insight to edit
    const [state, setState] = useState({
        wine_drank: insightClicked.wine_drank,
        thoughts: insightClicked.thoughts,
        location: insightClicked.location,
        enjoyed_with: insightClicked.enjoyed_with,
        image: insightClicked.image
    });
    // Handles change of inputs
    const handleChange = (e) => {
        // Value is the contents of the input
        const value = e.target.value;
        // Changes State of edit reducer
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: e.target.name, value: value }
        });
        // Spread state, set state to edit by getting the name property 
        // of the inputs, change state to value of input.
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
                helperText="Wine Drank"
                name="wine_drank"
                value={insightClicked.wine_drank}
                onChange={handleChange}
                variant="outlined"
            />
            {/* Thoughts */}
            <TextField
                margin="normal"
                fullWidth
                multiline
                rows={4}
                helperText="Thoughts"
                name="thoughts"
                value={insightClicked.thoughts}
                onChange={handleChange}
                variant="outlined"
            />
            {/* Location */}
            <TextField
                margin="normal"
                fullWidth
                helperText="Location"
                name="location"
                value={insightClicked.location}
                onChange={handleChange}
                variant="outlined"
            />
            {/* Companion */}
            <TextField
                margin="normal"
                fullWidth
                helperText="Who did you enjoy this with?"
                name="enjoyed_with"
                value={insightClicked.enjoyed_with}
                onChange={handleChange}
                variant="outlined"
            />
            {/* Photo */}
            <TextField
                margin="normal"
                fullWidth
                helperText="Image URL"
                name="image"
                value={insightClicked.image}
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
                Save
            </Button>
        </form>
    );
}

export default EditInsightForm;