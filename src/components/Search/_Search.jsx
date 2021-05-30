import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { InputAdornment, makeStyles } from "@material-ui/core";
import CurvyLines from './appCurvyLines.png';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import FoodList from './FoodList';
import List from '@material-ui/core/List';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => {
    return {
        container: {
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(15),
            direction: 'rows',
            display: 'flex',
            position: 'relative',
            alignItems: ' center',
            justify: 'center'
        },
        curvyLines: {
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
        },
        root: {
            display: 'flex',
            overflow: 'hidden',
        },
        margin: {
            margin: theme.spacing(1)
        },
        layout: {
            width: 'auto',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
                width: 1000,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
    }
})

const SearchView = () => {
    // hook for using custom classes
    const classes = useStyles();
    const dispatch = useDispatch();
    // array of pairings from store
    const pairing = useSelector(store => store.pairing);
    // Search results from reducer
    const searchResults = useSelector(store => store.searchResults);
    // State for search input
    const [search, setSearch] = useState('');
    // State for toggling search and conditional render
    const [toggleSearch, setToggleSearch] = useState(false);
    // Function to send search input.
    // This will continue to send dispatches as the search bar content changes
    const handleSearch = (e) => {
        const searchWord = e.target.value;
        console.log(`IN handleSearch - searching for ${searchWord}`);
        // Set state of search to the value of the search input
        setSearch(searchWord);
        // Dispatch to store in real time
        dispatch({ type: 'FETCH_SEARCH', search: searchWord });
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_PAIRING' });
        if (search) {
            setToggleSearch(true);
        } else {
            setToggleSearch(false);
        }
    }, [search]);

    return (
        <div className={classes.layout}>
            <section className={classes.root}>
                <Container className={classes.container}>
                    <img
                        src={CurvyLines}
                        className={classes.curvyLines}
                    />
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
                                    onChange={(e) => handleSearch(e)}
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
                {toggleSearch ?
                    <Grid container>
                        <Grid item xs={12}>
                            <List>
                                {searchResults.map(item => {
                                    return <FoodList key={item.id} item={item} />
                                })}
                            </List>
                        </Grid>
                    </Grid>
                    :
                    <Grid container>
                        <Grid item>
                            <Typography align="left">
                                Suggested:
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                                <List>
                                    {pairing.map(item => {
                                        return <FoodList key={item.id} item={item} /> 
                                    })}
                                </List>
                        </Grid>
                    </Grid>
                }
            </section>
        </div>
    );
}

export default SearchView;