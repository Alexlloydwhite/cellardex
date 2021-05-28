import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
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
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch({ type: 'FETCH_INSIGHT_BY_ID', id: params.id })
    }, []);

    const insightClicked = useSelector(store => store.insightById);

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
                    {JSON.stringify(insightClicked)}
                    <EditInsightForm />
                </Paper>
            </main>
        </CssBaseline>
    );
}
 
export default EditInsightLayout;