import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import UserPairing from '../PairingTable/UserPairing';
import Box from '@material-ui/core/Box';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const UserPageBody = ({ savedPairing }) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ alignItems: 'center' }}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="My Saved Pairings" {...a11yProps(0)} />
                    <Tab label="My Insights" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <UserPairing savedPairing={savedPairing} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </div>
    );
}

export default UserPageBody;