// MUI
import { 
    makeStyles,
    Typography,
    Container,
    Link
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography style={{textAlign:'center'}}>
                    Questions? <Link style={{ cursor: 'pointer' }}>Contact us.</Link>
                </Typography>
            </Container>
        </footer>
    );
}

export default Footer;