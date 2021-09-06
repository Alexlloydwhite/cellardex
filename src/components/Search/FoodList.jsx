// MUI
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  IconButton,
  Grid,
  Typography,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// React
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const FoodList = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Handles click of pairing option
  const handleClick = (id) => {
    // debug log
    console.log("Clicked!", id);
    // bring user to pairing description view
    history.push(`/pairing/${id}`);
    // Dispatch store to set the pairing click to the id of click
    dispatch({ type: "SET_PAIRING_CLICK", payload: id });
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Divider />
        <ListItem>
          <Typography variant="h5" color="textPrimary">
            <ListItemText disableTypography primary={item.food} />
          </Typography>
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={() => handleClick(item.id)}>
              <KeyboardArrowRightIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Grid>
    </Grid>
  );
};

export default FoodList;
