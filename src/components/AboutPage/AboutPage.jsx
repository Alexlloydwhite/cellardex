// MUI
import {
  Paper,
  makeStyles,
  Grid,
  Typography,
  Avatar
} from '@material-ui/core';
// Images
import LandingNav from '../NavBar/LandingNax';
import LandingImage from '../WelcomeScreen/landing-image.jpg';
import MuiLogo from './AboutImages/MUI.png';
import JavascriptLogo from './AboutImages/Javascript.png';
import NodeLogo from './AboutImages/nodejs.png';
import ReduxLogo from './AboutImages/redux.png';
import S3Logo from './AboutImages/s3.png';
import ReactLogo from './AboutImages/React.png';
import PostgresLogo from './AboutImages/postgres.png'
// Styles
const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: `url(${LandingImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 500,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    marginTop: theme.spacing(25),
  },
  largeAvatar: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  }
}));

function AboutPage() {
  const classes = useStyles();
  // Array of logos to map over and display
  const logos = [
    { image: MuiLogo },
    { image: JavascriptLogo },
    { image: NodeLogo},
    { image: ReduxLogo },
    { image: S3Logo },
    { image: ReactLogo },
    { image: PostgresLogo }
  ];
  return (
    <div>
      <LandingNav />
      <section>
        <Paper
          className={classes.mainFeaturedPost}
          style={{ backgroundImage: `url(${LandingImage})` }}
        >
          {/* Hero Overlay */}
          <div className={classes.overlay}>
            <Grid container>
              <Grid item xs={12}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography
                    variant="h3"
                    align="center"
                    marked="center"
                    id="landingHero"
                  >
                    ABOUT
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </section>
      <section style={{ marginTop: 15 }}>
        <Grid container>
          {logos.map(logo => (
            <Grid item lg={3} xs={12}>
              <Avatar src={logo.image} className={classes.largeAvatar} />
            </Grid>
          ))}
        </Grid>
      </section>
    </div>
  );
}

export default AboutPage;