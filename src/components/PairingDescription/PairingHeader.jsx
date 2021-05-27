import Typography from '@material-ui/core/Typography';
import WineGlasses from './wineglasses.jpg';
import { Grid } from '@material-ui/core';

const sectionStyle = {
    height: '100vh',
    backgroundImage: `url(${WineGlasses})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative'
}

const PairingHeader = ({ item }) => {

    return (
        <Grid
            style={sectionStyle}
            container
            direction="column"
            justify="space-evenly"
        >
            <Grid item>
                <Typography
                    variant="h2"
                    id="header"
                    style={{ textAlign: 'center' }}
                    gutterBottom
                    color="secondary"
                >
                    {item.food}{' & '}{item.wine}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default PairingHeader;

