import { useEffect } from "react";
import { reducerTypes } from "../utils";
import { createCollectionQuery, editCollectionQuery, getCollectionsQuery } from "../querys/collection";
import { errorAlert, successAlert } from "../../../helpers/alert";

export const getCollectionsAction = (state, dispatch) => {
    useEffect(() => {
        (async () => {
            if (state.user) await getCollectionsQuery(state.user.uid).then(res => dispatch({ type: reducerTypes.SET_COLLECTIONS, payload: { data: res } }));
        })();
    }, [state.user]);
}

export const createCollectionAction = async (e, collectionName, user, closeModal) => {
    e.preventDefault();

    if (collectionName == '') {
        errorAlert("Collection name can not be empty!"); return
    }
    try {
        const collection = await createCollectionQuery(collectionName, user);

        if (collection) {
            successAlert('Created Successfully');
            closeModal();
        }
    } catch (error) { }
}



export const editCollectionAction = async (e, collectionName, user, docId, closeModal) => {
    e.preventDefault();

    if (collectionName == '') {
        errorAlert("Collection name can not be empty!");
        return
    }

    try {
        const collection = await editCollectionQuery(collectionName, user, docId);

        if (collection) {
            successAlert('Updated Successfully');
            closeModal();
        }
    } catch (error) { }
}