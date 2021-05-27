import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core/';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


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