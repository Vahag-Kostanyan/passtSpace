import { useContext, useRef } from "react";
import DeleteSVG from "../../../../../svg/deleteSVG";
import EditSVG from "../../../../../svg/editSVG";
import { useOutsideClick } from "../../../../../hooks/useOutsideClick";
import GoBackSVG from "../../../../../svg/goBackSVG";
import { deletePasteAction } from "../../../actions/action";
import { StateContext } from "../../../index.jsx";
import CopySVG from "../../../../../svg/copySVG.jsx";
import { errorAlert, successAlert } from "../../../../../helpers/alert.js";

const Modal = ({ modalPosition, closeModal, localPaste, setIsEditPaste, setPaste }) => {
    const context = useContext(StateContext);

    const ref = useRef();
    useOutsideClick(ref, null, null, closeModal);
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    const editPaste = () => {
        setPaste(localPaste);
        setIsEditPaste(true);
        closeModal();
    }

    const copyPaste = () => {
        navigator.clipboard.writeText(localPaste.paste).then(
            () => {
                successAlert('Text copied to clipboard!');
                closeModal();
            },
            (err) => {
                errorAlert('Something want wrong please try again later');
                closeModal();
            }
        );
    }

    return (
        <div className="modal max-h-full overflow-y-auto p-2">
            <div
                ref={ref}
                style={{
                    position: 'fixed',
                    top: modalPosition.y,
                    left: modalPosition.x,
                    transform: 'translate(-50%, -50%)',
                    padding: '10px',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)',
                }}
            >
                <div onClick={closeModal} className="flex gap-3 p-1 px-3 pr-16 cursor-pointer hover:bg-gray-200 hover:rounded-xl">
                    <div>
                        <GoBackSVG height="20" width="20" />
                    </div>
                    <div> Close</div>
                </div>
                <div onClick={copyPaste} className="flex gap-2 p-1 px-3 pr-16 cursor-pointer hover:bg-gray-200 hover:rounded-xl">
                    <div>
                        <CopySVG height="20" width="20" />
                    </div>
                    <div> Copy</div>
                </div>
                <div onClick={editPaste} className="flex gap-2 p-1 px-3 pr-16 cursor-pointer hover:bg-gray-200 hover:rounded-xl">
                    <div>
                        <EditSVG height="20" width="20" />
                    </div>
                    <div> Edit</div>
                </div>
                <div onClick={() => deletePasteAction(context.dispatch, context.state.user, context.state.selectedCollection.id, localPaste.id, closeModal)} className="flex gap-2 p-1 mb-1 px-3 pr-16 cursor-pointer hover:bg-gray-200 hover:rounded-xl">
                    <div>
                        <DeleteSVG height="23" width="23" />
                    </div>
                    <div > Delete</div>
                </div>
            </div>
        </div>
    );
}

export default Modal;