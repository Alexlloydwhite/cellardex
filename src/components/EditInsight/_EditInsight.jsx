// MUI
import { 
    makeStyles,
    Paper,
    Typography
} from '@material-ui/core';
// Components
import EditInsightForm from './EditInsightForm';
// Styles
const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));

const EditInsight = () => {
    const classes = useStyles();
    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                {/* Page Header */}
                <Typography
                    component="h1"
                    variant="h4"
                    align="center"
                    gutterBottom
                >
                    Edit Insight
                </Typography>
                {/* Form component displays here */}
                <EditInsightForm />
            </Paper>
        </main>
    );
}

export default EditInsight;