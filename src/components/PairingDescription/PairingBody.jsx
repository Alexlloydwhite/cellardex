import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router';

const PairingBody = ({ item }) => {

    const history = useHistory();

    return (
        <Container style={{ marginTop: 50, marginBottom: 25 }}>
            <Typography 
                style={{ marginBottom: 15 }}
                variant="h5"
            >
                {item.description}
            </Typography>
            <Button
                onClick={() => history.push('/')}
                color="Secondary"
                variant="contained"
                style={{marginRight: 5}}
            >
                Back
            </Button>
            <Button
                onClick={() => console.log('clicked!')}
                color="primary"
                variant="contained"
            >
                Add to my pairings
            </Button>
        </Container>
    );
}

export default PairingBody;