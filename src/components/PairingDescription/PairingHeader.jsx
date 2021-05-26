import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => {
    return {
        root: {
            height: '80vh',
            minHeight: 500,
            maxHeight: 1300
        }
    }
})

const PairingHeader = ({ item }) => {
    // hook for using custom classes
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <img src="/images/wineglasses.jpg" />
            <Typography
                variant="h3"
                id="header"
            >
                {item.food} <br />
                {' & '} <br />
                {item.wine} <br />
            </Typography>
        </section>
    );
}

export default PairingHeader;