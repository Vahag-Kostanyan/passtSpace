import TextArea from "../../../../ui/textarea";
import SendButton from "../../ui/sendButton";
import { StateContext } from "../../index.jsx";
import { useContext, useState } from "react";
import { createPasteAction } from "../../actions/action.js";

const Footer = () => {
    const context = useContext(StateContext);
    const [paste, setPaste] = useState('');

    return (
        <form onSubmit={(e) => createPasteAction(e, context.dispatch, context.state.user, context.state.selectedCollection.id, paste)} >
            <div className={`flex items-center gap-2 ${!context.state.isSmallScreen && 'px-8'}`} >
                <TextArea
                    value={paste}
                    onChange={(e) => setPaste(e.target.value)}
                    placeholder='Paste Message'
                    className={"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl focus:outline-none border border-gray-300 resize-none"}
                />
                <SendButton/>
            </div>
        </form>
    );
}

export default Footer;