import { makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core/';
import InsightForm from './InsightForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';

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

const CreateInsight = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch({ type: 'SET_PAIRING_CLICK', payload: params.id });
    }, []);

    const pairingClicked = useSelector(store => store.pairingClick);

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
                        New Insight
                    </Typography>
                    {pairingClicked.map(i => {
                        return <Typography
                            component="h2"
                            variant="h6"
                            align="center"
                        >
                            {i.food}{' & '}{i.wine}
                        </Typography>
                    })}

                    <InsightForm />
                </Paper>
            </main>
        </CssBaseline>
    );
}

export default CreateInsight;