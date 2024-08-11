import { useContext } from "react";
import FormModal from "../../../../components/modals/formModal";
import DeleteButton from "../../ui/deleteButton";
import EditButton from "../../ui/editButton";
import GoBackButton from "../../ui/goBackButton";
import EditCollection from "../form/editCollectionForm";
import { StateContext } from "../../index.jsx";
import { reducerTypes } from "../../utils/index.js";

const ContentIndex = () => {
    const context = useContext(StateContext);

    return (
        <div className="flex-8 border-gray-200 bg-gray-50 bg-white shadow sm:rounded-lg p-3 flex flex-col w-full">
            {context.state.selectedCollection.id && (
                <div className="flex border-b-2 pb-2 items-center justify-between">
                    <div className="max-w-56 text-2xl font-extrabold text-gray-800 tracking-wide leading-tight overflow-hidden whitespace-nowrap overflow-ellipsis">
                        {context.state.selectedCollection.name}
                    </div>
                    <div className="flex justify-end gap-2">
                        <GoBackButton onClick={() => context.dispatch({ type: reducerTypes.SET_SELECTED_COLLECTION, payload: { data: {} } })} />
                        <FormModal ButtonComponent={() => EditButton} FormComponent={() => EditCollection} title={'Edit Collection'} />
                        <DeleteButton />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContentIndex;