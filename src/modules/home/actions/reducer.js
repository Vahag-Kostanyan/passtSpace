import { reducerTypes } from "../utils";

export const reducer = (state, action) => {
    switch (action.type) {
        case reducerTypes.SET_USER:
            return {...state, user: action.payload.data}
        case reducerTypes.SET_IS_SMALL_SCREEN:
            return {...state, isSmallScreen: action.payload.data}
        case reducerTypes.SET_COLLECTIONS:
            return {...state, collections: action.payload.data}
        case reducerTypes.SET_SELECTED_COLLECTION:
            return {...state, selectedCollection: action.payload.data}
        default:
            return state;
    }
}

