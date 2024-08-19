import { useContext } from "react";
import FormModal from "../../../../components/modals/formModal";
import DeleteButton from "../../ui/deleteButton";
import EditButton from "../../ui/editButton";
import GoBackButton from "../../ui/goBackButton";
import EditCollection from "../form/editCollectionForm";
import { StateContext } from "../../index.jsx";
import { reducerTypes } from "../../utils/index.js";
import DeleteModal from "../../../../components/modals/deleteModal.jsx";
import { deleteCollectionAction } from "../../actions/action.js";


const Head = () => {
    const context = useContext(StateContext);

    return (
        <div>
            <div className="flex border-b-2 pb-2 items-center justify-between">
                <div className="max-w-56 text-2xl font-extrabold text-gray-800 tracking-wide leading-tight overflow-hidden whitespace-nowrap overflow-ellipsis">
                    {context.state.selectedCollection.name}
                </div>
                <div className="flex justify-end gap-2">
                    <GoBackButton onClick={() => context.dispatch({ type: reducerTypes.SET_SELECTED_COLLECTION, payload: { data: {} } })} />
                    <FormModal ButtonComponent={() => EditButton} FormComponent={() => EditCollection} title={'Edit Collection'} />
                    <DeleteModal actionDelete={(closeModal) => deleteCollectionAction(context.dispatch, context.state.user, context.state.selectedCollection.id, closeModal)} ButtonComponent={() => DeleteButton} message={`You are removing collection ${context.state.selectedCollection.name}. This action is irreversible.`} />
                </div>
            </div>
        </div>
    );
}


export default Head;