// MUI
import {
    makeStyles,
    Typography,
    CardContent,
    CardMedia,
    CardHeader,
    IconButton,
    Menu,
    MenuItem,
    Divider
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// React
import { useState } from 'react';
// Components
import DeleteMenuItem from './DeleteMenuItem';
import EditMenuItem from './EditMenuItem';
// Styles
const useStyles = makeStyles({
    media: {
        height: 350,
        width: '100%'
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
    const subTitle = `Pairing: ${insight.wine_drank}`
    return (
        <div className={classes.cardDetail}>
            {/* Card Header */}
            <CardHeader
                title={insight.food}
                subheader={subTitle}
                // Action is the ellipse menu
                action={
                    <IconButton
                        className={classes.actions}
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            {/* Menu displays on click of ellipse */}
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => handleClose(insight.id)}
            >
                {/* Edit Option */}
                <MenuItem onClick={handleClose}>
                    <EditMenuItem insight={insight} />
                </MenuItem>
                {/* Delete Option */}
                <MenuItem onClick={handleClose}>
                    <DeleteMenuItem insight={insight} />
                </MenuItem>
            </Menu>
            {/* Insight Image */}
            <CardMedia>
                <img src={insight.image} className={classes.media} />
            </CardMedia>
            {/* Insight Thoughts */}
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