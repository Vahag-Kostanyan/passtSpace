import { useRef } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import XSVG from "../svg/xSVG";


const Modal = ({ title, children, onClose, footer }) => {
    const ref = useRef();
    useOutsideClick(ref, null, null, onClose);
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    });

    return (
        <div className="modal max-h-full overflow-y-auto p-2">
            <div className="modal__content max-h-full overflow-y-auto" ref={ref}>
                <div className="relative p-2 flex items-center justify-center border-b border-lightgray mb-2">
                    <h2>{title}</h2>
                    <button className='absolute right-0 p-2 hover:text-gray-700' onClick={onClose}>
                        <XSVG/>
                    </button>
                </div>
                <div className="p-2">
                    {children}
                </div>
                <div className='p-2 border-t'>
                    {footer}
                </div>
            </div>
        </div>
    );
}

export default Modal;