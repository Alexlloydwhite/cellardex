// Component imports
import UserInsights from './Insights/_InsightsCards';
import UserPairing from './Pairings/UserPairing';
// Library imports
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
// MUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
        <>
          {children}
        </>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
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

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // grab user details from store
  const user = useSelector(store => store.user);
  // grab list of saved pairings from the store
  const savedPairing = useSelector(store => store.savedPairing);
  // grabs insights from store 
  const insights = useSelector(store => store.insights);
  // Local state for value
  const [value, setValue] = useState(0);
  // Handles change of value
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch({ type: 'GET_SAVED_PAIRING' });
    dispatch({ type: 'FETCH_INSIGHTS' });
  }, [])

  return (
    <div>
      {/* Page Header */}
      <Container>
        {/* Greeting */}
        <Typography
          id="header"
          variant="h2"
          align="center"
        >
          Hello, {user.username}!
      </Typography>
        {/* User pairing and insight count */}
        <Typography align="center">
          {Object.keys(savedPairing).length} Saved Pairings | {insights.length} Insights.
      </Typography>
      </Container>
      {/* Page Body */}
      <Container>
        <div className={classes.root}>
          {/* AppBar contains tabs to switch between saved pairings and insights */}
          <AppBar position="static" style={{ alignItems: 'center' }}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="My Saved Pairings" {...a11yProps(0)} />
              <Tab label="My Insights" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          {/* Tab index 0 contains saved pairings */}
          <TabPanel value={value} index={0}>
            <UserPairing savedPairing={savedPairing} />
          </TabPanel>
          {/* Tab index 1 contains insights */}
          <TabPanel value={value} index={1}>
            <UserInsights />
          </TabPanel>
        </div>
      </Container>
    </div>
  );
}

export default Profile;