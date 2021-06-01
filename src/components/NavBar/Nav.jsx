import {
  makeStyles,
  Typography,
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  IconButton,
  Popper,
  MenuList,
  MenuItem,
  ClickAwayListener,
  Grow,
  Paper
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

//  soo many variations on the global theme :)
const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
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
  // Toggle the hamburger menu on mobile devices
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div className={classes.root}>
      {/* App Bar! */}
      <AppBar elevation={0} style={{ background: '#344959' }}>
        <Toolbar>
          {/* page title */}
          <Typography
            className={classes.welcome}
            component="h1"
            variant="h3"
            id="header"
          >
            CellarDex
          </Typography>
          {isMobile ? (
            <div>
              <IconButton onClick={handleToggle} ref={anchorRef}>
                {open ? <CloseIcon style={{ color: 'white' }} /> : <MenuIcon style={{ color: 'white' }} />}
              </IconButton>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                          <MenuItem onClick={() => history.push('/')}>Home</MenuItem>
                          <MenuItem onClick={() => history.push('/profile')}>Your Profile</MenuItem>
                          <MenuItem onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          ) : (
            <Toolbar>
              <Typography
                className={classes.links}
                onClick={() => history.push('/')}
                id="landingHero"
              >
                Home
              </Typography>
              <Typography
                className={classes.links}
                onClick={() => history.push('/profile')}
                id="landingHero"
              >
                Your Profile
              </Typography>
              <Typography
                className={classes.links}
                onClick={() => dispatch({ type: 'LOGOUT' })}
                id="landingHero"
              >
                Logout
              </Typography>
            </Toolbar>
          )}
          {/* Nav Links */}
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