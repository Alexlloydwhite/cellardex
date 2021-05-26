import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

const PairingDescription = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const pairing = useSelector(store => store.pairingClick);

    useEffect(() => {
        dispatch({ type: 'SET_PAIRING_CLICK', payload: params.id });
    })
    return (  
        <div>
            {JSON.stringify(pairing)}
        </div>
    );
}
 
export default PairingDescription;