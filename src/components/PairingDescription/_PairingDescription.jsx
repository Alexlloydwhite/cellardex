import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import PairingHeader from './PairingHeader';
import PairingBody from './PairingBody';

const PairingDescription = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const pairing = useSelector(store => store.pairingClick);

    useEffect(() => {
        dispatch({ type: 'SET_PAIRING_CLICK', payload: params.id });
    }, []);

    return (
        <div>
            {pairing.map(item => {
                return <div key={item.id}>
                    <PairingHeader item={item} />
                    <PairingBody item={item} />
                </div>
            })}
        </div>
    );
}

export default PairingDescription;