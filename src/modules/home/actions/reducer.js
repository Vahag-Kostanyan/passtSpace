import { reducerTypes } from "../utils";

export const reducer = (state, action) => {
    switch (action.type) {
        case reducerTypes.SET_USER:
            return {...state, user: action.payload.data}
        case reducerTypes.SET_IS_SMALL_SCREEN:
            return {...state, isSmallScreen: action.payload.data}
        case reducerTypes.ADD_COLLECTION:
            return {...state, collections: [...state.collections, action.payload.data]}
        case reducerTypes.EDIT_COLLECTION:
            return {...state, collections: state.collections.map(item => item.id === action.payload.data.id ? action.payload.data : item)}
        case reducerTypes.DELETE_COLLECTION:
            return {...state, collections: state.collections.filter(item => item.id !== action.payload.docId)}
        case reducerTypes.SET_COLLECTIONS:
            return {...state, collections: action.payload.data}
        case reducerTypes.SET_SELECTED_COLLECTION:
            return {...state, selectedCollection: action.payload.data}
        default:
            return state;
    }
}

