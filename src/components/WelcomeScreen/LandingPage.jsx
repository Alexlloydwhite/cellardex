// MUI imports
import {
  Grid,
  Paper,
  Card,
  CardContent,
  makeStyles,
  Typography,
  Container,
  Divider,
  Avatar
} from '@material-ui/core';
// MUI icon imports
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CreateIcon from '@material-ui/icons/Create';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// Local imports
import LandingImage from './landing-image.jpg';
import LandingNav from '../NavBar/LandingNax';
import Footer from '../Footer/Footer';
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
    textAlign: 'center',
    width: 130,
    height: 130
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  reviewContainer: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  // Array of reviews to map over w/ cards
  const reviews = [
    {
      image: 'https://www.whitehouse.gov/wp-content/uploads/2021/01/44_barack_obama.jpg',
      name: 'Barack Obama',
      title: '44th President',
      review: `"I love CellarDex!"`
    },
    {
      image: 'https://media.wired.com/photos/60a4468ef83409ce52d3c65a/4:3/w_1782,h_1336,c_limit/Opinion-BillGates-Vaccine-1183210462.jpg',
      name: 'Bill Gates',
      title: 'CEO Microsoft',
      review: `"Innovative"`
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Oprah_in_2014.jpg/220px-Oprah_in_2014.jpg',
      name: 'Oprah Winfrey',
      title: 'Television Host',
      review: `"I recommend this app"`
    },
  ];

  return (
    <div>
      {/* Nav Bar */}
      <LandingNav />
      {/* Hero Image */}
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
        {/* Introduction Section */}
      </section>
      <section className={classes.root}>
        <Container className={classes.container}>
          <div className={classes.title}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
            >
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
      {/* User Reviews */}
      <section className={classes.reviewContainer}>
        {/* User Reviews Header */}
        <Container
          maxWidth="sm"
          component="main"
          style={{ marginBottom: 50 }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
          >
            What are our users saying?
          </Typography>
          <Divider />
        </Container>
        {/* User Review Cards */}
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {reviews.map((review) => (
              <Grid item key={review.title} xs={12} sm={6} md={4}>
                <Card>
                  <CardContent align="center">
                    <Avatar className={classes.avatar}>
                      <img src={review.image} />
                    </Avatar>
                  </CardContent>
                  <CardContent>
                    <div className={classes.cardContent}>
                      <Typography variant="h6">
                        {review.name}
                      </Typography>
                    </div>
                    <div className={classes.cardContent}>
                      <Typography color="secondary" gutterBottom>
                        {review.title}
                      </Typography>
                    </div>
                    <div className={classes.cardContent}>
                      <Typography variant="body1">
                        {review.review}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section >
      {/* Footer */}
      <Footer />
    </div >
  );
}

export default LandingPage;