import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
});

const InsightCardsLayout = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const insights = useSelector(store => store.insights);

    useEffect(() => {
        // get saved insights
        dispatch({ type: 'FETCH_INSIGHTS' });
    },[])

    return (
        <Grid item xs={12} md={6}>
            <Card className={classes.card}>
                <div className={classes.cardDetail}>
                    <Typography>
                        {JSON.stringify(insights)}
                    </Typography>
                </div>
            </Card>
        </Grid>
    );
}

export default InsightCardsLayout;