import FormModal from "../../../components/modals/formModal";
import { changeCollection } from "../actions";
import AddButton from "../ui/addButton";
import AddCollectionForm from "../components/form/addCollectionForm";

const Collections = () => {
    return (
        <div className="flex-4 p-3 border-gray-200 bg-gray-50 bg-white shadow sm:rounded-lg flex flex-col gap-2 min-w-56">
            <div className="flex flex-col  border-b-2 pb-2">
                <FormModal ButtonComponent={() => AddButton} FormComponent={() => AddCollectionForm} title={'New Collection'} />
            </div>
            <div  className="flex flex-col gap-2 pt-4">
                <div onClick={() => changeCollection('work')} className="p-2 cursor-pointer hover:bg-gray-200 hover:rounded-xl p-2 ">Work</div>
                <div className="p-2 cursor-pointer hover:bg-gray-200 hover:rounded-xl p-2 ">New Projects</div>
                <div className="p-2 cursor-pointer hover:bg-gray-200 hover:rounded-xl p-2 ">Educations</div>
                <div className="p-2 cursor-pointer hover:bg-gray-200 hover:rounded-xl p-2 ">Mined</div>
            </div>
        </div>
    );
}

export default Collections;