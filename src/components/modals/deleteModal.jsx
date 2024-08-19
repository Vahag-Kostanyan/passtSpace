import { useState } from "react";
import ConfirmDialog from "../../ui/confirm-dialog";

const DeleteModal = ({ ButtonComponent, message, actionDelete }) => {

    const [showDialog, setShowDialog] = useState(false);

    const handleDelete = () => {
        setShowDialog(true);
    }

    const Button = ButtonComponent();

    return (
        <div>
            <Button variant="danger" onClick={handleDelete}>
                Delete
            </Button>
            {showDialog && <ConfirmDialog title="Delete Record" message={message} onConfirm={() => actionDelete(setShowDialog)} closeDialog={() => setShowDialog(false)} />}
        </div>
    )
}

export default DeleteModal;