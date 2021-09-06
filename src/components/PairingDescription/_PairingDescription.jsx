// React
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
// Components
import PairingHeader from "./PairingHeader";
import PairingBody from "./PairingBody";
// MUI
import { Grid, Container } from "@material-ui/core";

const PairingDescription = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const pairing = useSelector((store) => store.pairingClick);

  useEffect(() => {
    dispatch({ type: "SET_PAIRING_CLICK", payload: params.id });
  }, []);

  return (
    <Container>
      <main>
        <PairingHeader pairing={pairing} />
        <Grid container>
          {pairing.map((item) => (
            <PairingBody key={item.id} item={item} />
          ))}
        </Grid>
      </main>
    </Container>
  );
};

export default PairingDescription;
