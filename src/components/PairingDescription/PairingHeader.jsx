import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const PairingHeader = ({item}) => {

    return (
        <Container>
            <img src="/images/wineglasses.jpg" />
            <Typography
                variant="h3"
                id="header"
            >
                {item.food} <br />
                {' & '} <br />
                {item.wine} <br />
            </Typography>
        </Container>
    );
}

export default PairingHeader;

