import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core/';
import EditInsightForm from './EditInsightForm';

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
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));

const EditInsightLayout = () => {
    const classes = useStyles();
    return (  
        <CssBaseline>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography
                        component="h1"
                        variant="h4"
                        align="center"
                        gutterBottom
                    >
                        Edit Insight
                    </Typography>
                    <EditInsightForm />
                </Paper>
            </main>
        </CssBaseline>
    );
}
 
export default EditInsightLayout;