import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';


const FoodList = ({ item }) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <ListItem key={item.id}>
                    <ListItemText primary={item.name} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end">
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