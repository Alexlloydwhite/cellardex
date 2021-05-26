import { makeStyles } from "@material-ui/core";
import React from "react";
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

//  soo many variations on the global theme :)
const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3)
    },
    root: {
      display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    welcome: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(1)
    },
    links: {
      marginRight: theme.spacing(2),
      cursor: 'pointer'
    }
  }
})

function Nav({ children }) {
  // hook for using custom classes
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={classes.root}>
      {/* App Bar! */}
      <AppBar elevation={0} style={{ background: '#344959' }}>
        <Toolbar>
          {/* page title */}
          <Avatar src="images/logo-white-background.png" className={classes.avatar} />
          <Typography 
            className={classes.welcome} 
            variant="h5"
          >
            CellarDex
          </Typography>
          {/* Nav Links */}
          <Typography 
            className={classes.links}
            onClick={() => history.push('/')}
          >
            Home
          </Typography>
          <Typography 
            className={classes.links}
            onClick={() => dispatch({ type: 'LOGOUT' })}
          >
            Logout
          </Typography>
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