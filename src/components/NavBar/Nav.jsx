import { makeStyles } from "@material-ui/core";
import React from "react";
import Typography from '@material-ui/core/Typography';
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

  return (
    <div className={classes.root}>
      {/* App Bar! */}
      <AppBar elevation={0}>
        <Toolbar>
          {/* page title */}
          <Typography className={classes.welcome} variant="h5" >
            CellarDex
          </Typography>
          <Avatar src="images/logo-red-background.png" className={classes.avatar} />
        </Toolbar>
      </AppBar>
      {/* this layout sit on top of the rest of the app. */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  )
}

export default Nav;