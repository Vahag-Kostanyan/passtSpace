import { useContext, useState } from "react";
import Content from "./content/index.jsx";
import Footer from "./footer.jsx";
import Head from "./head.jsx";
import { StateContext } from "../../index.jsx";

const ContentIndex = () => {
    const context = useContext(StateContext);
    const [paste, setPaste] = useState(null);
    const [isEditPaste, setIsEditPaste] = useState(null);

    return (
        <div className="flex-8 border-gray-200 bg-gray-50 bg-white shadow sm:rounded-lg p-3 flex flex-col w-full">
            {context.state.selectedCollection.id && (
                <div className="flex flex-col justify-between gap-2 h-full">
                    <Head/>
                    <Content setPaste={setPaste} setIsEditPaste={setIsEditPaste}/>
                    <Footer  paste={paste} setPaste={setPaste} isEditPaste={isEditPaste} setIsEditPaste={setIsEditPaste}  />
                </div>
            )}
        </div>
    );
}

export default ContentIndex;