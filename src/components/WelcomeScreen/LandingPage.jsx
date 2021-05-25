import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LandingImage from './landing-image.jpg'
import LoginForm from './LoginForm';
import Link from '@material-ui/core/Link';
import { useState } from 'react';
import RegisterForm from './RegisterForm';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${LandingImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    width: 200,
    height: 200
  },
}));

function LandingPage() {
  const classes = useStyles();
  const [toggle, setToggle] = useState(true);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            CellarDex
          </Typography>
          <Avatar className={classes.avatar}>
            <img src="images/logo-white-background.png" />
          </Avatar>
          <Typography component="h1" variant="h6">
            Empowering Your Meals
          </Typography>
          {toggle ?
            <div>
              <LoginForm />
              <Grid container>
                <Grid item>
                  <Typography>
                    Don't have an account?{' '}
                    <Link onClick={() => setToggle(false)} style={{ cursor: 'pointer' }}>
                      {"Create an account"}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </div>
            :
            <div>
              <RegisterForm />
              <Grid container>
                <Grid item>
                  <Typography>
                    Already have an account?{' '}
                    <Link onClick={() => setToggle(true)} style={{ cursor: 'pointer' }}>
                      {"Login"}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </div>
          }
        </div>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
