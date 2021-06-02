// MUI
import { 
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Grid,
    Divider,
    Typography,
    IconButton
} from '@material-ui/core';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
// React
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

const UserPairingList = ({ item }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = (id) => {
        console.log(`clicked!`, id);
        // Dispatch store to set the pairing click to the id of click
        dispatch({ type: 'SET_PAIRING_CLICK', payload: id });
        // Bring user to Create Insight View
        history.push(`/insights/create/${id}`)
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <ListItem>
                    <Typography variant="h5">
                        <ListItemText
                            disableTypography
                            primary={`${item.food} & ${item.wine}`}
                        />
                    </Typography>
                    <ListItemSecondaryAction>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                        >
                            <IconButton
                                edge="end"
                                onClick={() => handleClick(item.id)}
                            >
                                <NoteAddIcon />
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