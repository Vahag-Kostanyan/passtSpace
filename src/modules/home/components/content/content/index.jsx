import { StateContext } from "../../../index.jsx";
import { useContext, useState } from "react";
import List from "./list.jsx";
import Modal from "./modal.jsx";

const ContentIndex = () => {
    const context = useContext(StateContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

    const RightClickComponent = (event) => {
        event.preventDefault();

        setModalPosition({
            x: event.clientX,
            y: event.clientY,
        });

        setIsModalOpen(true);
    }

    return (
        <div className={`p-4 h-full px-8 ${!context.state.isLoading && '-mb-base  overflow-y-scroll '}`}>
            <List RightClickComponent={RightClickComponent}/>

            {isModalOpen && (
                <Modal closeModal={() => {setIsModalOpen(false)}} modalPosition={modalPosition}/>
            )}
        </div>
    );
}

export default ContentIndex;