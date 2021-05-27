import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core/';


const UserPairingList = ({ item }) => {

    const handleClick = (id) => {
        console.log(`Saved Pairing Clicked: ${id}`);
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <ListItem>
                    <Typography variant="h5">
                        <ListItemText disableTypography primary={`${item.food} & ${item.wine}`} />
                    </Typography>
                    <ListItemSecondaryAction>
                        <Grid container direction="row" alignItems="center">
                            <IconButton edge="end" onClick={() => handleClick(item.id)}>
                                <NoteAddIcon /> create an insight
                            </IconButton>
                        </Grid>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
            </Grid>
        </Grid>
    );
}

export default UserPairingList;