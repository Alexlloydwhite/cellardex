import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';


import UserPairingList from './UserPairingList';

const UserPairing = ({ savedPairing }) => {
    return (
        <Grid item xs={12}>
            <List>
                {savedPairing.map(item => {
                    return <UserPairingList key={item.id} item={item}/>
                })}
            </List>
        </Grid>);
}

export default UserPairing;