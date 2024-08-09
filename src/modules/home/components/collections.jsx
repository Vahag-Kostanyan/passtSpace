import FormModal from "../../../components/modals/formModal";
import AddButton from "../ui/addButton";
import AddCollectionForm from "../components/form/addCollectionForm";
import Loading from "../../../ui/loading";

const Collections = ({ state, changeCollection }) => {
    return (
        <div className={`flex-4 p-3 border-gray-200 bg-gray-50 bg-white shadow sm:rounded-lg flex flex-col gap-2 min-w-56 ${state.isSmallScreen ? "w-full" : "max-w-56"}`}>
            <div className="flex flex-col  border-b-2 pb-2">
                <FormModal ButtonComponent={() => AddButton} FormComponent={() => AddCollectionForm} title={'New Collection'} />
            </div>
            <div className="flex flex-col gap-2 pt-4">
                {state.collections && state.collections.length > 0 ? (
                    <>
                        {state.collections.map(item => {
                            return <div
                                key={item.id}
                                onClick={() => changeCollection(item)}
                                className={`p-2 cursor-pointer hover:bg-gray-200 hover:rounded-xl p-2 overflow-hidden whitespace-nowrap overflow-ellipsis ${item.id === state?.selectedCollection?.id ? 'text-black' : 'text-neutral-500'}`}
                            >
                                {item.name}
                            </div>
                        })}
                    </>
                ) : (<div className="flex justify-center w-full"><Loading /></div>)}
            </div>
        </div>
    );
}

export default Collections;