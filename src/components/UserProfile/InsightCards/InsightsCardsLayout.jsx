import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InsightCard from './InsightCard';

const useStyles = makeStyles({
    card: {
        margin: 10
    },
});

const InsightCardsLayout = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const insights = useSelector(store => store.insights);

    useEffect(() => {
        // get saved insights
        dispatch({ type: 'FETCH_INSIGHTS' });
    }, [])

    return (
        <Grid container>
            {insights.map(insight => {
                return <Grid item xs={12} md={6} key={insight.id}>
                    <Card
                        className={classes.card}
                        variant="outlined"
                    >
                        <InsightCard insight={insight} />
                    </Card>
                </Grid>
            })}
        </Grid>
    );
}

export default InsightCardsLayout;