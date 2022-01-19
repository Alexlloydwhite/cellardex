// Hero image
import WineGlasses from "./wineglasses.jpg";
// MUI
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    backgroundImage: `url(${WineGlasses})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 200,
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
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1),
      paddingRight: 0,
    },
  },
}));

const PairingHeader = ({ pairing }) => {
  const classes = useStyles();

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${WineGlasses})` }}
    >
      <div className={classes.overlay}>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" id="header">
                Pairing Description
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

export default PairingHeader;
