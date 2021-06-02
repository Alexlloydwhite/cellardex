// MUI
import { 
    Grid,
    Card,
    makeStyles
} from '@material-ui/core';
// React
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Component
import InsightCardDetails from './InsightCardDetails';

const useStyles = makeStyles({
    card: {
        margin: 10
    },
});

const InsightCards = () => {
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
                        <InsightCardDetails insight={insight} />
                    </Card>
                </Grid>
            })}
        </Grid>
    );
}

export default InsightCards;