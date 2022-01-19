// MUI
import { makeStyles, Typography, AppBar, Toolbar } from "@material-ui/core";
// React
import { useHistory } from "react-router";
// Styles
const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
    },
    root: {
      display: "flex",
    },
    toolbar: theme.mixins.toolbar,
    welcome: {
      flexGrow: 1,
    },
    links: {
      marginRight: theme.spacing(2),
      cursor: "pointer",
    },
    appBar: {
      boxShadow: "none",
      background: "transparent",
      backgroundColor: "rgba(0,0,0,.3)",
    },
  };
});

const LandingNav = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      {/* App Bar! */}
      <AppBar elevation={0} className={classes.appBar}>
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
          {/* Nav Links */}
          <Typography
            className={classes.links}
            id="landingHero"
            onClick={() => history.push("/signin")}
          >
            Log In
          </Typography>
          <Typography
            className={classes.links}
            id="landingHero"
            onClick={() => history.push("/signup")}
          >
            Sign Up
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default LandingNav;
