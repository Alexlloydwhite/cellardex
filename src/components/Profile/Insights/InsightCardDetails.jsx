// MUI
import {
    makeStyles,
    Typography,
    CardContent,
    CardMedia,
    CardHeader,
    IconButton,
    Menu,
    MenuItem
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// React
import { useState } from 'react';
// Components
import DeleteMenuItem from './DeleteMenuItem';
import EditMenuItem from './EditMenuItem';

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        float: 'right',
    }
})

const InsightCardDetails = ({ insight }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    // Handles click of kebab menu, opens menu
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    // Handles click of kebab menu, closes menu
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className={classes.cardDetail}>
            <CardHeader
                title={insight.food}
                subheader={insight.wine_drank}
                action={
                    <IconButton
                        className={classes.actions}
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => handleClose(insight.id)}
            >
                <MenuItem onClick={handleClose}>
                    <EditMenuItem insight={insight} />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <DeleteMenuItem insight={insight} />
                </MenuItem>
            </Menu>
            <CardMedia>
                <img src={insight.image} />
            </CardMedia>
            <CardContent>
                <Typography
                    variant="body2"
                    component="p"
                >
                    {insight.thoughts}
                </Typography>
            </CardContent>
        </div>
    );
}

export default InsightCardDetails;