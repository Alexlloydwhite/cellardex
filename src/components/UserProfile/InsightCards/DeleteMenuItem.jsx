import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';


const DeleteMenuItem = ({ insight }) => {
    const dispatch = useDispatch();
    // state for dialog
    const [open, setOpen] = useState(false);
    // click handler for delete 
    const handleDelete = (id) => {
        // fact checking
        console.log(`Clicked! ${id}`);
        // closes dialog after click
        setOpen(false);
        dispatch({ type: 'DELETE_INSIGHT', id: id });
    }
    // click handles for opening dialog
    const handleOpenClick = () => {
        setOpen(true);
    }
    // click handler for closing dialog
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <div onClick={handleOpenClick}>
                Delete
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>{"Delete This Insight?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Deleting this insight will permanently remove it from you profile.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => handleDelete(insight.id)}
                        color="secondary"
                    >
                        Delete Insight
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DeleteMenuItem;