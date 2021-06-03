// MUI
import {
    makeStyles,
    Button,
    TextField,
    Input
} from '@material-ui/core';
// React
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from 'react-s3';
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
// Grabs S3 bucket information from ENV
const S3_BUCKET = process.env.REACT_APP_AWS_BUCKET_NAME;
const REGION = process.env.REACT_APP_AWS_BUCKET_REGION;
const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY;
const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_KEY;
// Create config object using bucket information
const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY
}

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
    const [selectedPhoto, setSelectedPhoto] = useState('');
    // user data from store
    const user = useSelector(store => store.user);
    // pairing clicked data from store
    const pairingClicked = useSelector(store => store.pairingClick);
    // Clicked handle for submit insight
    const handleFileInput = (e) => {
        setSelectedPhoto(e.target.files[0]);
    }

    const handleUpload = (file) => {
        uploadFile(file, config)
            .then(data => {
                console.log(data.location);
                setPhoto(String(data.location))
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
            <Input type="file" onChange={handleFileInput} />
            <Button onClick={() => handleUpload(selectedPhoto)}>Upload</Button>
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

export default InsightForm;