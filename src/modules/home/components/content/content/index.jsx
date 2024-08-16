import { StateContext } from "../../../index.jsx";
import { useContext, useEffect, useRef, useState } from "react";
import List from "./list.jsx";
import Modal from "./modal.jsx";
import { useScrollDown } from "../../../../../hooks/useScrollDown.js";
import { reducerTypes } from "../../../utils/index.js";
import { data } from "autoprefixer";

const ContentIndex = () => {
    const context = useContext(StateContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pasteId, setPasteId] = useState(null);
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useScrollDown(containerRef);

    const RightClickComponent = (event, paste) => {
        try {

            event.preventDefault();


            setModalPosition({
                x: event.clientX,
                y: event.clientY,
            });
            context.dispatch({ type: reducerTypes.SET_CURRENT_PASTE, payload: { data: paste } });
            // context.dispatch({type: reducerTypes.SET_CURRENT_PASTE_ACTION, payload: {type: ''}});

            console.log(context.state);


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div ref={containerRef} className={`flex flex-col-reverse p-4 h-full px-8 ${!context.state.isLoading && '-mb-base  overflow-y-scroll '}`}>
            <List RightClickComponent={RightClickComponent} />

            {context?.state?.currentPaste?.id && (
                <Modal
                    pasteId={context.state.currentPaste.id}
                    closeModal={() => { context.dispatch({ type: reducerTypes.SET_CURRENT_PASTE, payload: { data: null } }); }}
                    modalPosition={modalPosition}
                />
            )}
        </div>
    );
}

export default ContentIndex;