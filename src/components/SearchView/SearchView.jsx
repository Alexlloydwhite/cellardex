import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { InputAdornment, makeStyles } from "@material-ui/core";
import CurvyLines from './appCurvyLines.png';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import './SearchView.css';
import SearchResults from './SearchResults';


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
        }
    }
})

const SearchView = () => {
    // hook for using custom classes
    const classes = useStyles();

    return (
        <div>
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
                                    className={classes.margin}
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
                <SearchResults />
            </section>
        </div>
    );
}

export default SearchView;