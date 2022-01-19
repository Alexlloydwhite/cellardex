// MUI
import {
  Typography,
  Paper,
  makeStyles,
  Avatar,
  TextField,
  Button,
  Link,
  Grid,
} from "@material-ui/core/";
// React
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";
// Styles
const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    width: 200,
    height: 200,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <Grid container component="main" className={classes.layout}>
      <Grid item xs={12} component={Paper} variant="outlined">
        <div className={classes.paper}>
          <Typography
            component="h3"
            variant="h3"
            align="center"
            gutterBottom
            id="header"
          >
            CellarDex
          </Typography>
          <Avatar className={classes.avatar} style={{ alignSelf: "center" }}>
            <img src="images/logo-white-background.png" />
          </Avatar>
          <Typography
            variant="h6"
            style={{ marginTop: 10, textAlign: "center" }}
          >
            Sign Up to get expertly crafted wine pairings
          </Typography>
          <form className={classes.form} onSubmit={registerUser} noValidate>
            {errors.registrationMessage && (
              <h3 className="alert" role="alert">
                {errors.registrationMessage}
              </h3>
            )}
            {/* Input for Username */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Username"
              label="Username"
              name="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            {/* input for password */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="password"
              name="password"
              label="Password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={{ marginBottom: 20 }}
            />
            {/* submit button */}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </form>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper} variant="outlined">
          <Typography>
            Already have an account?{" "}
            <Link
              onClick={() => history.push("/signin")}
              style={{ cursor: "pointed" }}
            >
              Log In
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignUp;
