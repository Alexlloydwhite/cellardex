import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import FoodList from './FoodList';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => {
    return {
        container: {
            marginRight: theme.spacing(30),
            marginLeft: theme.spacing(30),
            // border: 'solid',
            // borderColor: 'black',
            direction: 'rows',
            // position: 'relative',
            alignItems: 'center',
            justify: 'center'
        }
    }
})
const SearchResults = () => {
    // hook for using custom classes
    const classes = useStyles();

    const items = [
        { name: 'a', id: 1 },
        { name: 'b', id: 2 },
        { name: 'c', id: 3 },
        { name: 'd', id: 4 },
    ];

    return (
        <Container className={classes.container}>
            <Grid container spacing={1}>
                <Grid item>
                    <Typography>
                        Suggested:
                    </Typography>
                </Grid>
                <Grid item>
                    <List>
                        {items.map(item => {
                            return <FoodList item={item} />
                        })}
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
}

export default SearchResults;