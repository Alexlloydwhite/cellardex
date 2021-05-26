import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const UsePageHeader = ({user}) => {

    return (  
        <Container>
        <Typography 
          id="header"
          variant="h2"
          align="center"
        >
            Hello, {user.username}!
        </Typography>
      </Container>
    );
}
 
export default UsePageHeader;