// MUI
import { Paper, makeStyles, Grid, Typography, Avatar } from "@material-ui/core";
// Images
import LandingNav from "../NavBar/LandingNax";
import LandingImage from "./AboutImages/code.jpg";
import MuiLogo from "./AboutImages/MUI.png";
import JavascriptLogo from "./AboutImages/Javascript.png";
import NodeLogo from "./AboutImages/nodejs.png";
import ReduxLogo from "./AboutImages/redux.png";
import S3Logo from "./AboutImages/s3.png";
import ReactLogo from "./AboutImages/React.png";
import PostgresLogo from "./AboutImages/postgres.png";
// Local
import Footer from "../Footer/Footer";
// Styles
const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: `url(${LandingImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 950,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    marginTop: theme.spacing(25),
  },
  largeAvatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

function AboutPage() {
  const classes = useStyles();
  // Array of logos to map over and display
  const logos = [
    { image: JavascriptLogo },
    { image: ReactLogo },
    { image: ReduxLogo },
    { image: NodeLogo },
    { image: MuiLogo },
    { image: S3Logo },
    { image: PostgresLogo },
  ];
  return (
    <div>
      <section>
        <Paper
          className={classes.mainFeaturedPost}
          style={{ backgroundImage: `url(${LandingImage})` }}
        >
          {/* Hero Overlay */}
          <div className={classes.overlay}>
            <Grid container justify="center" spacing={5}>
              {logos.map((logo) => (
                <Grid item xs="auto">
                  <div className={classes.mainFeaturedPostContent}>
                    <Avatar src={logo.image} className={classes.largeAvatar} />
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Paper>
      </section>
    </div>
  );
}

export default AboutPage;
