import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import UserPageBody from './UserPageBody'

const UsePageHeader = ({ user, savedPairing }) => {

  const insights = useSelector(store => store.insights);
  return (
    <Container>
      <Typography
        id="header"
        variant="h2"
        align="center"
      >
        Hello, {user.username}!
      </Typography>
      <Typography align="center">
        {Object.keys(savedPairing).length} Saved Pairings | {insights.length} Insights.
      </Typography>
      <UserPageBody savedPairing={savedPairing} />
    </Container>
  )
}

export default UsePageHeader;