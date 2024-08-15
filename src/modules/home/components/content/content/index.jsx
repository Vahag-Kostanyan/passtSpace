import { StateContext } from "../../../index.jsx";
import { useContext, useEffect, useRef, useState } from "react";
import List from "./list.jsx";
import Modal from "./modal.jsx";

const ContentIndex = () => {
    const context = useContext(StateContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pasteId, setPasteId] = useState(null);
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, []);

    const RightClickComponent = (event, pasteId) => {
        event.preventDefault();
        
        setPasteId(pasteId);
        setModalPosition({
            x: event.clientX,
            y: event.clientY,
        });

        setIsModalOpen(true);        
    }

    return (
        <div ref={containerRef} className={`flex flex-col-reverse p-4 h-full px-8 ${!context.state.isLoading && '-mb-base  overflow-y-scroll '}`}>
            <List RightClickComponent={RightClickComponent} />

            {isModalOpen && (
                <Modal pasteId={pasteId} closeModal={() => { setIsModalOpen(false) }} modalPosition={modalPosition} />
            )}
        </div>
    );
}

export default ContentIndex;