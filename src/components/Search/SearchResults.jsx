import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import FoodList from './FoodList';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => {
    return {
        layout: {
            width: 'auto',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
                width: 1000,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
    }
});

const SearchResults = () => {
    // hook for using custom classes
    const classes = useStyles();
    const dispatch = useDispatch();
    const pairing = useSelector(store => store.pairing);

    useEffect(() => {
        dispatch({ type: 'FETCH_PAIRING' });
    }, []);

    return (
        <section className={classes.layout}>
                <Grid container>
                    <Grid item>
                        <Typography align="left">
                            Suggested:
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <List>
                            {pairing.map(item => {
                                return <FoodList key={item.id} item={item} />
                            })}
                        </List>
                    </Grid>
                </Grid>
        </section>
    );
}

export default SearchResults;