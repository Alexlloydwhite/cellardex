import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
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
        textAlign: 'center'
    },
    avatar: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        marginRight: '32%',
        marginLeft: '32%',
        width: 200,
        height: 200,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const LogIn = () => {
    const classes = useStyles();
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector(store => store.errors)
    const dispatch = useDispatch();

    const login = (event) => {
        event.preventDefault();

        if (username && password) {
            dispatch({
                type: 'LOGIN',
                payload: {
                    username: username,
                    password: password,
                },
            });
        } else {
            dispatch({ type: 'LOGIN_INPUT_ERROR' });
        }
    }; // end login
    return (
        <main className={classes.layout}>
            <Paper className={classes.paper} variant="outlined">
                <Typography
                    component="h3"
                    variant="h3"
                    align="center"
                    gutterBottom
                    id="header"
                >
                    CellarDex
                </Typography>
                <Avatar className={classes.avatar} style={{ alignSelf: 'center' }}>
                    <img src="images/logo-white-background.png" />
                </Avatar>
                <form className={classes.form} onSubmit={login} noValidate>
                    {errors.loginMessage && (
                        <h3 className="alert" role="alert">
                            {errors.loginMessage}
                        </h3>
                    )}
                    {/* Input for Username */}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="Username"
                        label="Username"
                        name="Username"
                        autoComplete="email"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    {/* input for password */}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="password"
                        name="password"
                        label="Password"
                        required
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {/* submit button */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Log In
                    </Button>
                </form>
            </Paper >
            <Paper className={classes.paper} variant="outlined">
                <Typography>
                    Don't have an account?{' '}
                    <Link
                        onClick={() => history.push('/signup')}
                        style={{ cursor: 'pointed' }}
                    >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </main >
    );
}

export default LogIn;