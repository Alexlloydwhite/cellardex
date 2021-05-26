import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';


const FoodList = ({ item }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    // Handles click of pairing option
    const handleClick = (id) => {
        // debug log
        console.log('Clicked!', id);
        // Uncomment this when view is established
        // history.push('/pairing/${id});
        // Dispatch store to set the pairing click to the id of click
        dispatch({ type: 'SET_PAIRING_CLICK', payload: id });
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <ListItem>
                    <ListItemText primary={item.food} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" onClick={() => handleClick(item.id)}>
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
            </Grid>
        </Grid>
    );
}

export default FoodList;