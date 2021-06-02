// MUI
import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Collapse,
    IconButton,
    makeStyles,
    Divider,
    Typography
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CreateIcon from '@material-ui/icons/Create';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
// React
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
// Styles
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: theme.spacing(1)
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

const UserPairingList = ({ item }) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    // State for expanding card
    const [expanded, setExpanded] = useState(false);
    // Click handler for expanding card content
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }
    // Handles click for creating insight
    const handleClick = (id) => {
        console.log(`clicked!`, id);
        // Dispatch store to set the pairing click to the id of click
        dispatch({ type: 'SET_PAIRING_CLICK', payload: id });
        // Bring user to Create Insight View
        history.push(`/insights/create/${id}`)
    }

    return (
        <Grid item xs={12} md={6} lg={3}>
            <Card className={classes.root} variant="outlined">
                <CardHeader
                    title={item.food}
                    subheader={item.wine}
                />
                <Divider variant="middle" />
                <CardActions disableSpacing>
                    <IconButton>
                        <DeleteOutlineIcon />
                    </IconButton>
                    <IconButton>
                        <CreateIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnEdit>
                    <CardContent>
                        <Typography>
                            {item.description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    );
}

export default UserPairingList;