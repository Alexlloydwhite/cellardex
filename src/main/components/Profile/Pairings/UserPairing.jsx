// MUI
import { Grid } from "@material-ui/core";
// Component
import UserPairingList from "./UserPairingList";

const UserPairing = ({ savedPairing }) => {
  return (
    <Grid container>
      {/* Map saved pairing onto cards */}
      {savedPairing.map((item) => {
        return <UserPairingList key={item.id} item={item} />;
      })}
    </Grid>
  );
};

export default UserPairing;
