import { createContext, useReducer } from "react";
import Collections from "./components/collections";
import Content from "./components/content";
import { useWindowResize } from "../../hooks/useWindowResize";
import { getAndCheckUser } from "../../actions/currentUser";
import { reducer } from "./actions/reducer";
import { initFormData } from "./helpers/initData";
import { reducerTypes } from "./utils";
import { getCollectionsAction } from "./actions/action";

export const StateContext = createContext();

const HomeModule = () => {
    const [state, dispatch] = useReducer(reducer, initFormData());

    useWindowResize((data) => dispatch({ type: reducerTypes.SET_IS_SMALL_SCREEN, payload: { data: data } }));
    getAndCheckUser((user) => dispatch({ type: reducerTypes.SET_USER, payload: { data: user } }));
    getCollectionsAction(state, dispatch);


    const CollectionsComponent = () => <StateContext.Provider value={{state, dispatch}}><Collections/></StateContext.Provider>
    const ContentComponent = () => <StateContext.Provider value={{state, dispatch}}><Content/></StateContext.Provider>

    return (
        <div className="flex gap-3 max-w-full" style={{ height: 'calc(100vh - 115px)' }}>
            {state.isSmallScreen ? (<>{state.selectedCollection.id ? (<ContentComponent />) : (<CollectionsComponent />)}</>) :
                (
                    <>
                        <CollectionsComponent />
                        <ContentComponent />
                    </>
                )}

        </div>
    );
}

export default HomeModule;