// MUI
import {
  Grid,
  Container,
  Typography,
  InputAdornment,
  makeStyles,
  TextField,
  List,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// Components
import CurvyLines from "./appCurvyLines.png";
import FoodList from "./FoodList";
// React
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Styles
const useStyles = makeStyles((theme) => {
  return {
    container: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(5),
      direction: "rows",
      display: "flex",
      position: "relative",
      alignItems: " center",
      justify: "center",
    },
    curvyLines: {
      pointerEvents: "none",
      position: "absolute",
      top: -180,
    },
    root: {
      display: "flex",
      overflow: "hidden",
    },
    margin: {
      margin: theme.spacing(1),
    },
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
        width: 1000,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
  };
});

const SearchView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const pairing = useSelector(store => store.pairing);
  const searchResults = useSelector(store => store.search);

  const [ search, setSearch ] = useState("");
  const [ debouncedSearch, setDebouncedSearch ] = useState(search);
  const [ toggleSearch, setToggleSearch ] = useState(false);
  
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 600);

    return () => {
      clearTimeout(timerId);
    }
  }, [ search ])

  useEffect(() => {
    dispatch({ type: "FETCH_PAIRING" });
    if (search) {
      setToggleSearch(true);
    } else {
      setToggleSearch(false);
    }

    dispatch({ type: "FETCH_SEARCH", search });
  }, [ debouncedSearch ]);

  return (
    <div className={classes.layout}>
      <section className={classes.root}>
        <Container className={classes.container}>
          <img src={CurvyLines} className={classes.curvyLines} />
          <Grid container spacing={1} justify="center">
            <Grid item>
              <div>
                {/* Search View Title */}
                <Typography id="header" variant="h2" align="center">
                  What's for dinner?
                </Typography>
                <br />
                {/* Search Bar */}
                <TextField
                  value={search}
                  className={classes.margin}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search our collection of pairings"
                  variant="outlined"
                  type="search"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section>
        {/* conditional rendering for search results
                        IF search bar is active, display results
                        ELSE, display suggested */}
        {toggleSearch ? (
          <Grid container>
            <Grid item xs={12}>
              <List>
                {searchResults.map((item) => {
                  return <FoodList key={item.id} item={item} />;
                })}
              </List>
            </Grid>
          </Grid>
        ) : (
          <Grid container>
            <Grid item>
              <Typography variant="h6" color="secondary" align="left">
                Suggested:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <List>
                {pairing.map((item) => {
                  return <FoodList key={item.id} item={item} />;
                })}
              </List>
            </Grid>
          </Grid>
        )}
         {toggleSearch && searchResults.length === 0 && 
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                No results found.
              </Typography>
            </Grid>
          </Grid>
        }
      </section>
    </div>
  );
};

export default SearchView;
