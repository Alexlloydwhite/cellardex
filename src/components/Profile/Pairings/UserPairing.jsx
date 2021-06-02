// MUI
import { Grid, List } from '@material-ui/core';
// Component
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