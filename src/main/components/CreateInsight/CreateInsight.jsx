// MUI
import { makeStyles, CssBaseline, Paper, Typography } from "@material-ui/core";
// Components
import InsightForm from "./InsightForm";
// React
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
// Styles
const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

const CreateInsight = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const params = useParams();
  // useEffect hook grabs the pairing based on the URL params
  // This allows the page to persist through refresh
  useEffect(() => {
    dispatch({ type: "SET_PAIRING_CLICK", payload: params.id });
  }, []);
  // Data for the pairing clicked
  const pairingClicked = useSelector((store) => store.pairingClick);
  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        {/* Page Header */}
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          New Insight
        </Typography>
        {/* 
          Pairing clicked is an array
          So we map over it to display the data
        */}
        {pairingClicked.map((i) => {
          return (
            <Typography component="h2" variant="h6" align="center">
              {i.food}
              {" & "}
              {i.wine}
            </Typography>
          );
        })}
        {/* Form component */}
        <InsightForm />
      </Paper>
    </main>
  );
};

export default CreateInsight;
