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
            return {...state, selectedCollection: {...state.selectedCollection, name: action.payload.data.name}, collections: state.collections.map(item => {
                if(item.id === action.payload.data.id){
                    item.name = action.payload.data.name;
                }
                return item;
            }  )}
        case reducerTypes.DELETE_COLLECTION:
            return {...state, selectedCollection: {}, collections: state.collections.filter(item => item.id !== action.payload.docId)}
        case reducerTypes.SET_COLLECTIONS:
            return {...state, collections: action.payload.data}
        case reducerTypes.SET_SELECTED_COLLECTION:
            return {...state, selectedCollection: action.payload.data}
        case reducerTypes.SET_PASTES:
            return {...state, isPastesLoading: false, pastes: action.payload.data}
        case reducerTypes.ADD_PASTES:
            return {...state, pastes: [action.payload.data, ...state.pastes]}
        case reducerTypes.SET_LOADING:
            return {...state, isLoading: action.payload.status}
        case reducerTypes.SET_PASTES_LOADING:
            return {...state, isPastesLoading: action.payload.status}
        default:
            return state;
    }
}

