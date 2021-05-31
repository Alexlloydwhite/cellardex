import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import LandingImage from './landing-image.jpg';
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Container from '@material-ui/core/Container';
import LandingNav from '../NavBar/LandingNax';
import Footer from '../Footer/Footer';
import Button from '@material-ui/core/Button'
const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: `url(${LandingImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 800,
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
    marginTop: theme.spacing(35),
  },
  root: {
    display: 'flex',
    backgroundColor: 'rgba(0,0,0,.3)',
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div>
      <LandingNav />
      <section>
        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${LandingImage})` }}>
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
                    EMPOWERING YOUR MEALS <br />WITH EXPERTLY CRAFTED WINE PAIRINGS
                </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    marked="center"
                    id="landingHero"
                  >
                    Scroll to learn more
                  <br />
                    <ArrowDownwardIcon />
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </section>
      <section className={classes.root}>
        <Container className={classes.container}>
          <Typography variant="h4" marked="center" className={classes.title} component="h2">
            How it works
          </Typography>
          <div>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <div className={classes.number}>1.</div>
                  <Typography variant="h5" align="center">
                    Describe main feature
                </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <div className={classes.number}>2.</div>
                  <Typography variant="h5" align="center">
                    Why should the user sign up?
                </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <div className={classes.number}>3.</div>
                  <Typography variant="h5" align="center">
                    CellarDex is awesome :)
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ marginTop: 50 }}>
            <Button variant="contained">Join Today</Button>
          </div>
        </Container>
      </section>
      <section>
        <Container className={classes.container}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <Typography>
                  What our users are saying
            </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <Typography>
                  Customer testimony goes here!
            </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;