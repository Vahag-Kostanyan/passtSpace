import { useReducer } from "react";
import Collections from "./components/collections";
import ContentIndex from "./components/content";
import { useQueryParams } from "../../hooks/useQueryParams";
import { useWindowResize } from "../../hooks/useWindowResize";
import { getAndCheckUser } from "../../actions/currentUser";
import { reducer } from "./actions/reducer";
import { initFormData } from "./helpers/initData";
import { reducerTypes } from "./utils";
import { getCollectionsAction } from "./actions/action";

const HomeModule = () => {
    const queryParams = useQueryParams();
    const [state, dispatch] = useReducer(reducer, initFormData());

    useWindowResize((data) => dispatch({ type: reducerTypes.SET_IS_SMALL_SCREEN, payload: { data: data } }));
    getAndCheckUser((user) => dispatch({ type: reducerTypes.SET_USER, payload: { data: user } }));
    getCollectionsAction(state, dispatch);

    const CollectionsComponent = () => <Collections
        state={state}
        changeCollection={(data) => dispatch({ type: reducerTypes.SET_SELECTED_COLLECTION, payload: { data: data } })}
    />
    const ContentIndexComponent = () => <ContentIndex
        closeCollection={() => dispatch({ type: reducerTypes.SET_SELECTED_COLLECTION, payload: { data: {} } })}
        selectedCollection={state.selectedCollection}
    />

    return (
        <div className="flex  gap-3" style={{ height: 'calc(100vh - 115px)' }}>
            {state.isSmallScreen ? (<>{queryParams.collection ? (<><ContentIndexComponent /></>) : (<><CollectionsComponent /></>)}</>) :
                (
                    <>
                        <CollectionsComponent />
                        <ContentIndexComponent />
                    </>
                )}

        </div>
    );
}

export default HomeModule;