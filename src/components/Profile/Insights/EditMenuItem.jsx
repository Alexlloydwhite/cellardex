// React
import { useHistory } from "react-router";

const EditMenuItem = ({ insight }) => {
    const history = useHistory();
    // Click handler for edit 
    const handleEditClick = (id) => {
        console.log(`Clicked edit! ${id}`);
        // bring user to edit insight form
        history.push(`/insights/edit/${id}`);
    }
    return (  
        <div onClick={() => handleEditClick(insight.id)}>
            Edit
        </div>
    );
}
 
export default EditMenuItem;