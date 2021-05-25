import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';

const FoodList = ({ item }) => {
    return (
        <div>
            <ListItem key={item.id}>
                <ListItemText primary={item.name} />
                <ListItemSecondaryAction>
                    <IconButton edge="end">
                        <KeyboardArrowRightIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />
        </div>
    );
}

export default FoodList;