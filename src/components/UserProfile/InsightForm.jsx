import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';


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
    const classes = useStyles();

    const handleSubmit = () => {
        console.log('clicked submit!');
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
                margin="normal"
                fullWidth
                variant="outlined"
            />
            <TextField
                margin="normal"
                fullWidth
                variant="outlined"
            />
        </form>
    );
}

export default InsightForm;