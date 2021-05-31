import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
        },
        root: {
            display: 'flex'
        },
        toolbar: theme.mixins.toolbar,
        welcome: {
            flexGrow: 1,
        },
        links: {
            marginRight: theme.spacing(2),
            cursor: 'pointer'
        },
        appBar: {
            boxShadow: 'none',
            background: 'transparent',
            backgroundColor: 'rgba(0,0,0,.3)',
        }
    }
});

const LandingNav = ({ children }) => {
    const classes = useStyles();

    return (
        <div>
            {/* App Bar! */}
            <AppBar elevation={0} className={classes.appBar}>
                <Toolbar>
                    {/* page title */}
                    <Typography
                        className={classes.welcome}
                        component="h1"
                        variant="h3"
                        id="header"
                    >
                        CellarDex
                    </Typography>
                    {/* Nav Links */}
                    <Typography
                        className={classes.links}
                        id="header"
                    >
                        Sign In
                    </Typography>
                    <Typography
                        className={classes.links}
                        id="header"
                    >
                        Sign Up
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* this layout sit on top of the rest of the app. */}
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    );
}

export default LandingNav;