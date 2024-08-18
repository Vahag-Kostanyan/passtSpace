import TextArea from "../../../../ui/textarea";
import SendButton from "../../ui/sendButton";
import { StateContext } from "../../index.jsx";
import { useContext, useEffect, useState } from "react";
import { createPasteAction, updatePasteAction } from "../../actions/action.js";
import XSVG from "../../../../svg/xSVG.jsx";

const Footer = ({ paste, setPaste, isEditPaste, setIsEditPaste }) => {
    const context = useContext(StateContext);
    const [currentPaste, setCurrentPaste] = useState('');

    useEffect(() => {
        if (isEditPaste) {
            setCurrentPaste(paste.paste);
        }
    }, [isEditPaste, paste]);

    const handelSubmit = async (e) => {
        if (isEditPaste) {
            await updatePasteAction(e, context.dispatch, context.state.user, context.state.selectedCollection.id, paste.id, currentPaste);
            setPaste({});
            setIsEditPaste(false);
            setCurrentPaste('');
        } else {
            createPasteAction(e, context.dispatch, context.state.user, context.state.selectedCollection.id, currentPaste)
        }
    }

    const closeUpdateMessage = (e) => {
        e.preventDefault();
        setPaste({});
        setIsEditPaste(false);
        setCurrentPaste('');
    }

    return (
        <form onSubmit={handelSubmit} >
            <div className={`flex flex-col gap-2 ${!context.state.isSmallScreen && 'px-8'}`}>
                {isEditPaste && (
                    <div className="bg-gray-200 p-2 flex justify-between rounded-xl">
                        <div>Update Message</div>
                        <button className='hover:text-gray-700' onClick={closeUpdateMessage}>
                            <XSVG/>
                        </button>
                    </div>
                )}
                <div className={`flex items-center gap-2 `} >
                    <TextArea
                        value={currentPaste}
                        onChange={(e) => setCurrentPaste(e.target.value)}
                        placeholder='Paste Message'
                        className={"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl focus:outline-none border border-gray-300 resize-none"}
                    />
                    <SendButton />
                </div>
            </div>
        </form>
    );
}

export default Footer;