// MUI
import { 
    makeStyles,
    Typography,
    CardContent,
    CardMedia,
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
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
        float: 'left',
        margin: 10,
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
            <CardMedia>
                <img src={insight.image} className={classes.cardMedia} />
            </CardMedia>
            <CardContent>
                <Typography component="h2" variant="h5">
                    {insight.food}{' & '}{insight.wine}
                </Typography>
                <Typography variant="subtitle1">
                    Bottle of wine: {insight.wine_drank}
                </Typography>

                <IconButton
                    className={classes.actions}
                    onClick={handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => handleClose(insight.id)}
                >
                    <MenuItem>
                        View
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <EditMenuItem insight={insight} />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <DeleteMenuItem insight={insight} />
                    </MenuItem>
                </Menu>
            </CardContent>
        </div>
    );
}

export default InsightCardDetails;