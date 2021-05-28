import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

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

    const handleChange = (e, field) => {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: `${field}`, value: e.target.value }
        })
    }
    return (
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
            {/* Wine Name */}
            <TextField
                margin="normal"
                fullWidth
                helperText="Include both vintage and name of producer"
                value={insightClicked.wine_drank}
                onChange={(e, value) => handleChange(e, value)}
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
                onChange={(event) => setThoughts(event.target.value)}
                variant="outlined"
            />
            {/* Location */}
            <TextField
                margin="normal"
                fullWidth
                required
                label="Location"
                onChange={(event) => setLocation(event.target.value)}
                variant="outlined"
            />
            {/* Companion */}
            <TextField
                margin="normal"
                fullWidth
                required
                label="Who did you enjoy this with?"
                onChange={(event) => setCompanion(event.target.value)}
                variant="outlined"
            />
            {/* Photo */}
            <TextField
                margin="normal"
                fullWidth
                required
                label="Do you have a photo? Enter the image URL here"
                onChange={(event) => setPhoto(event.target.value)}
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