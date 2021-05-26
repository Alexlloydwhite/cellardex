import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const UsePageHeader = ({ user, savedPairing }) => {

  return (
    <Container>
      <Typography
        id="header"
        variant="h2"
        align="center"
      >
        Hello, {user.username}!
        </Typography>
      <br />
      <Typography align="center">
        {Object.keys(savedPairing).length} Saved Pairing(s) | 0 Insight(s).
      </Typography>
    </Container>
  )
}

export default UsePageHeader;