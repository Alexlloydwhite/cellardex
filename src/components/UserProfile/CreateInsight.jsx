import { useEffect } from "react";
import { useSelector } from "react-redux";

const CreateInsight = () => {
    const pairing = useSelector(store => store.pairingClick);


    return (  
        <div>
            {pairing.id}
            <h4>Create new insight</h4>
        </div>
    );
}
 
export default CreateInsight;