import { useEffect } from "react";
import { reducerTypes } from "../utils";
import { createCollectionQuery, createPasteQuery, deleteCollectionQuery, editCollectionQuery, getCollectionsQuery, getPastesQuery } from "../querys/collection";
import { errorAlert, successAlert } from "../../../helpers/alert";

export const getCollectionsAction = (state, dispatch) => {
    useEffect(() => {
        dispatch({ type: reducerTypes.SET_LOADING, payload: { status: true } });
        (async () => {
            if (state.user){
                await getCollectionsQuery(state.user.uid).then(res => dispatch({ type: reducerTypes.SET_COLLECTIONS, payload: { data: res } }));
                dispatch({ type: reducerTypes.SET_LOADING, payload: { status: false } });
            }
        })();
    }, [state.user]);
}

export const createCollectionAction = async (e, dispatch, collectionName, user, closeModal) => {
    e.preventDefault();

    if (collectionName == '') {
        errorAlert("Collection name can not be empty!"); return
    }
    try {
        const collection = await createCollectionQuery(collectionName, user);

        if (collection) {
            dispatch({type: reducerTypes.ADD_COLLECTION, payload: {data: collection}});
            successAlert('Created Successfully');
            closeModal();
        }
    } catch (error) { }
}



export const editCollectionAction = async (e, dispatch, collectionName, user, docId, closeModal) => {
    e.preventDefault();

    if (collectionName == '') {
        errorAlert("Collection name can not be empty!");
        return
    }

    try {
        const collection = await editCollectionQuery(collectionName, user, docId);

        if (collection) {
            dispatch({type: reducerTypes.EDIT_COLLECTION, payload: {data: collection}});
            successAlert('Updated Successfully');
            closeModal();
        }
    } catch (error) { }
}

export const deleteCollectionAction = async (dispatch, user, docId, closeModal) => {
    try {
        const status = await deleteCollectionQuery(docId, user.uid);

        if (status) {
            dispatch({type: reducerTypes.DELETE_COLLECTION, payload: {docId}});
            successAlert('Deleted Successfully');
            closeModal();
        }
    } catch (error) { }
}

export const selectCollectionAction = async (dispatch, user, item) => {
    try{
        const pastes =  await getPastesQuery(user, item.id);
                        
        dispatch({ type: reducerTypes.SET_SELECTED_COLLECTION, payload: { data: item }});
        dispatch({ type: reducerTypes.SET_PASTES_LOADING, payload: { status: true }});
        dispatch({ type: reducerTypes.SET_PASTES, payload: { data: pastes }});
    }catch(error) {
        
    }
}


export const createPasteAction = async (e, dispatch, user, docId, pasteText) => {
    try{
        e.preventDefault();

        const paste = await createPasteQuery(user, docId, pasteText);
        
        dispatch({ type: reducerTypes.ADD_PASTES, payload: { data: paste }});
        
    }catch(error) {}
}