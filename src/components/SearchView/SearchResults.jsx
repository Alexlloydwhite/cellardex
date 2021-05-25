import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import FoodList from './FoodList';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            overflow: 'hidden',
        },
        container: {
            marginRight: theme.spacing(20),
            marginLeft: theme.spacing(20),
        }
    }
})
const SearchResults = () => {
    // hook for using custom classes
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_PAIRING' });
    })

    const items = [
        { name: 'a', id: 1 },
        { name: 'b', id: 2 },
        { name: 'c', id: 3 },
        { name: 'd', id: 4 },
    ];

    return (
        <section className={classes.root}>
                <Grid container className={classes.container}>
                    <Grid item>
                        <Typography align="left">
                            Suggested:
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <List>
                            {items.map(item => {
                                return <FoodList item={item} />
                            })}
                        </List>
                    </Grid>
                </Grid>
        </section>
    );
}

export default SearchResults;