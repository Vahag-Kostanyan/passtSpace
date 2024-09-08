import FormModal from "../../../components/modals/formModal";
import AddButton from "../ui/addButton";
import AddCollectionForm from "../components/form/addCollectionForm";
import Loading from "../../../ui/loading";
import { useContext } from "react";
import { StateContext } from "../index.jsx";
import { selectCollectionAction } from "../actions/action.js";

const Collections = () => {

    const context = useContext(StateContext);

    return (
        <div className={`flex-4 p-3 border-gray-200 bg-gray-50 bg-white shadow sm:rounded-lg flex flex-col gap-2 min-w-56 ${context.state.isSmallScreen ? "w-full" : "max-w-56"}`}>
            <div className="flex flex-col  border-b-2 pb-2">
                <FormModal ButtonComponent={() => AddButton} FormComponent={() => AddCollectionForm} title={'New Collection'} />
            </div>
            <ul className={`flex flex-col gap-2 pt-4 ${!context.state.isLoading && '-mb-base  overflow-y-scroll '}`}  >
                {!context.state.isLoading ? (
                    <>
                        {context?.state?.collections?.map(item => {
                            return <li
                                key={item.id}
                                onClick={() => selectCollectionAction(context.dispatch, context.state.user, item)}
                                className={`p-2 cursor-pointer hover:bg-gray-200 hover:rounded-xl p-2  ${item.id === context.state?.selectedCollection?.id ? 'text-black' : 'text-neutral-500'}`}
                            >
                                <p className="overflow-hidden whitespace-nowrap overflow-ellipsis">{item.name}</p>
                            </li>
                        })}
                    </>
                ) : (<div className="flex justify-center w-full"><Loading /></div>)}
            </ul>
        </div>
    );
}

export default Collections;