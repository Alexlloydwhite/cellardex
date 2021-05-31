import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import LandingImage from './landing-image.jpg';
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Container from '@material-ui/core/Container';
import LandingNav from '../NavBar/LandingNax';
import Footer from '../Footer/Footer';
import Divider from '@material-ui/core/Divider';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: `url(${LandingImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 900,
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
    backgroundColor: 'rgba(0,0,0,.1)',
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
    marginBottom: theme.spacing(10),
  },
  avatar: {
    margin: theme.spacing(1),
    width: 200,
    height: 200
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
                    EMPOWERING YOUR MEALS
                </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    marked="center"
                    id="landingHero"
                    style={{ marginBottom: 10 }}
                  >
                    WITH EXPERTLY CRAFTED WINE PAIRINGS
                  </Typography>
                  <div style={{ textAlign: 'center' }}>
                    <ArrowDownwardIcon />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </section>
      <section className={classes.root}>
        <Container className={classes.container}>
          <div className={classes.title}>
            <Typography variant="h4" align="center" gutterBottom>
              Say hello to your personal sommelier
            </Typography>
            <Divider />
          </div>
          <div>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <Typography variant="h5" align="center">
                    <SearchIcon /><br />
                    Browse through our extensive collection of food and wine pairings
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <Typography variant="h5" align="center">
                    <FavoriteIcon /><br />
                    Keep a running list of your favorite pairings
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <Typography variant="h5" align="center">
                    <CreateIcon /><br />
                    Create and publish pairing insights
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
      <section>
        <Container className={classes.container}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <Typography variant="h4">
                  What our users <br />are saying
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <Paper>
                  <Avatar className={classes.avatar}>
                    <img src="https://www.whitehouse.gov/wp-content/uploads/2021/01/44_barack_obama.jpg" />
                  </Avatar>
                  <div style={{ textAlign: 'center' }}> 
                    <Typography color="primary">
                      Barack Obama
                  </Typography>
                  <Typography color="secondary" gutterBottom>
                      44th President
                  </Typography>
                  <Typography variant="body2">
                    I LOVE CellarDex! This app improved my life and saved my marriage!
                  </Typography>
                  </div>
                </Paper>
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