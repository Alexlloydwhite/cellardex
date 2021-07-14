// Component imports
import UserInsights from './Insights/_InsightsCards';
import UserPairing from './Pairings/UserPairing';
// Library imports
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
// MUI
import {
  Container,
  Typography,
  Avatar,
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  Grid,
} from '@material-ui/core';
// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'theme.palette.background.paper',
  },
  avatar: {
    marginTop: theme.spacing(5),
    width: 130,
    height: 130,
    backgroundColor: '#344959'
  },
  header: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  headerText: {
    textAlign: 'center',
    marginBottom: theme.spacing(2)
  }
}));
// Function for tab content display
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
  const numberOfSavedPairings = Object.keys(savedPairing).length;
  // On page load, useEffect hook 
  // Dispatches to get saved pairings and insights
  useEffect(() => {
    dispatch({ type: 'GET_SAVED_PAIRING' });
    dispatch({ type: 'FETCH_INSIGHTS' });
  }, []);

  return (
    <div>
      {/* Page Header */}
      <Grid container>
        <Grid item xs={12} className={classes.header}>
          <div>
            <Avatar className={classes.avatar}>
              <Typography variant="h1">
                {user.username[0]}
              </Typography>
            </Avatar>
          </div>
        </Grid>
        <Grid item xs={12} className={classes.headerText}>
          <Typography
            id="header"
            variant="h4"
          >
            Hello, {user.username}!
          </Typography>
          {numberOfSavedPairings === 1 ?
            <Typography>
              {numberOfSavedPairings} Saved Pairing
            </Typography>
            :
            <Typography>
              {numberOfSavedPairings} Saved Pairings
            </Typography>
          }
          {insights.length === 1 ?
            <Typography>
              {insights.length} Insight
            </Typography>
            :
            <Typography>
              {insights.length} Insights
            </Typography>
          }
        </Grid>
      </Grid>
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
            {savedPairing.length > 0 ?
              <UserPairing savedPairing={savedPairing} />
              :
              <div style={{ textAlign: 'center', marginTop: 10 }}>
                <Typography variant="h5">
                  You have no saved pairings.
                </Typography>
              </div>
            }
          </TabPanel>
          {/* Tab index 1 contains insights */}
          <TabPanel value={value} index={1}>
            {insights.length > 0 ?
              <UserInsights />
              :
              <div style={{ textAlign: 'center', marginTop: 10 }}>
                <Typography variant="h5">
                  You have no insights.
                </Typography>
              </div>
            }
          </TabPanel>
        </div>
      </Container>
    </div>
  );
}

export default Profile;