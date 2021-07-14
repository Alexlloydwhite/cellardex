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
    Typography,
    Chip
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
        margin: theme.spacing(1),
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
    const subTitle = `& ${item.wine}`
    // State for expanding card
    const [expanded, setExpanded] = useState(false);
    // Click handler for expanding card content
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }
    // Handles click for creating insight
    // Dispatch store to set the pairing click to the id of click
    // Bring user to Create Insight View
    const handleCreateInsightClick = (id) => {
        dispatch({ type: 'SET_PAIRING_CLICK', payload: id });
        history.push(`/insights/create/${id}`)
    }

    const handleDeleteSavedPairingClick = (id) => {
        dispatch({ type: 'DELETE_SAVED_PAIRING', payload: id });
    }

    return (
        <Grid item xs={12} md={3}>
            {/* Pairing Card */}
            <Card className={classes.root} variant="outlined">
                {/* Header */}
                <CardHeader
                    title={item.food}
                    subheader={subTitle}
                />
                {/* Line Divides */}
                <Divider variant="middle" />
                {/* Action BTNS */}
                <CardActions disableSpacing>
                    {/* Delete BTN */}
                    <Chip
                        onClick={() => handleDeleteSavedPairingClick(item.id)}
                        avatar={<DeleteOutlineIcon />}
                        label="Delete"
                        variant="outlined"
                        style={{ marginRight: 10, marginLeft: 5 }}
                    />
                    {/* Create BTN */}
                    <Chip
                        onClick={() => handleCreateInsightClick(item.id)}
                        avatar={<CreateIcon />}
                        label="Create Insight"
                        variant="outlined"
                    />
                    {/* Expand BTN */}
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                {/* Content to show when expanded */}
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