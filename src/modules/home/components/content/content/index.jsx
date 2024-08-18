import { StateContext } from "../../../index.jsx";
import { useContext, useRef, useState } from "react";
import List from "./list.jsx";
import Modal from "./modal.jsx";
import { useScrollDown } from "../../../../../hooks/useScrollDown.js";

const ContentIndex = ({ setPaste, setIsEditPaste}) => {
    const context = useContext(StateContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [localPaste, setLocalPaste] = useState(null);
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useScrollDown(containerRef);

    const RightClickComponent = (event, currentPaste) => {
        try {
            event.preventDefault();

            setLocalPaste(currentPaste);
            setModalPosition({
                x: event.clientX,
                y: event.clientY,
            });

            setIsModalOpen(true);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div ref={containerRef} className={`flex flex-col-reverse p-4 h-full px-8 ${!context.state.isLoading && '-mb-base  overflow-y-scroll '}`}>
            <List RightClickComponent={RightClickComponent} />

            {isModalOpen && (
                <Modal
                    setPaste={setPaste}
                    setIsEditPaste={setIsEditPaste}
                    localPaste={localPaste}
                    closeModal={() => { setIsModalOpen(false) }}
                    modalPosition={modalPosition}
                />
            )}
        </div>
    );
}

export default ContentIndex;