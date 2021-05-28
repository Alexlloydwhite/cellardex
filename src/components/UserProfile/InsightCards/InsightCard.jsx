import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState } from 'react';

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

const InsightCard = ({ insight }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

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
                    onClose={handleClose}
                >
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Delete</MenuItem>
                </Menu>
            </CardContent>
        </div>
    );
}

export default InsightCard;