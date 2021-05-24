import { makeStyles } from "@material-ui/core";
import React from "react";
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from "react-router";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar'
import { useDispatch } from "react-redux";

// storing drawer width in variable as it is used more than once.
const drawerWidth = 240
//  soo many variations on the global theme :)
const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3)
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: 'flex'
    },
    active: {
      background: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(2)
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    welcome: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2)
    }
  }
})

function Nav({ children }) {
  // hook for using custom classes
  const classes = useStyles();
  // history hook (fun word)
  const history = useHistory();
  // trigger new page view event
  const location = useLocation();

  const dispatch = useDispatch();

  // storing side bar menu items as an array so that we can map them instead of hard coding everything
  const menuItems = [
    {
      text: 'Search',
      icon: <SubjectOutlined color="primary" />,
      path: '/search'
    },
    {
      text: 'Your Profile',
      icon: <SubjectOutlined color="primary" />,
      path: '/profile'
    },
    {
      text: 'About',
      icon: <SubjectOutlined color="primary" />,
      path: '/about'
    },
  ]

  return (
    <div className={classes.root}>
      {/* App Bar! */}
      <AppBar
        className={classes.appbar}
        elevation={0}
      >
        <Toolbar>
          {/* page title */}
          <Typography className={classes.welcome} variant="h5" >
            CellarDex
                    </Typography>
          <Avatar src="images/logo-red-background.png" className={classes.avatar} />
        </Toolbar>

      </AppBar>

      {/* side draw */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          {/* side drawer title */}
          <Typography variant="h5" className={classes.title}>
            Welcome!
                    </Typography>
        </div>

        {/* list / links */}
        <List>
          {/* loops thru menu item array and displays each on DOM */}
          {menuItems.map(item => (
            <ListItem
              button
              key={item.text}
              // on click of location button, browser sends to correct URL
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon} </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          {/* Hard Coded Logout button */}
          <ListItem
            button
            onClick={() => dispatch({ type: 'LOGOUT' })}
          >
            <ListItemIcon>
              <SubjectOutlined color="primary" />
            </ListItemIcon>
            <ListItemText primary="Logout"/>
          </ListItem>
        </List>

      </Drawer>
      {/* this layout sit on top of the rest of the app. */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  )
}

export default Nav;