import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return {
        container: {
            marginRight: theme.spacing(15),
            marginLeft: theme.spacing(15),
            border: 'solid',
            borderColor: 'black',
            direction: 'rows',
            position: 'relative',
            alignItems: 'center',
            justify: 'center'
        }
    }
})
const SearchResults = () => {
    // hook for using custom classes
    const classes = useStyles();

    return (
        <Container className={classes.container}>
           
        </Container>
    );
}

export default SearchResults;