import { useContext, useState } from "react";
import Button from "../../../../ui/button";
import Input from "../../../../ui/input";
import { editCollectionAction } from "../../actions/action";
import { StateContext } from "../../index.jsx";

const EditCollection = ({ closeModal = () => { } }) => {
    const context = useContext(StateContext);

    const [name, setName] = useState(context.state.selectedCollection.name);

    const handelSubmit = (e) => editCollectionAction(e, context.dispatch, name, context.state.user, context.state.selectedCollection.id, closeModal);
    
    return (
        <form className='p-2' onSubmit={handelSubmit}>
            <div className="mb-5">
                <label htmlFor="new_collection" className="block mb-2 text-sm font-medium">Name</label>
                <Input value={name} action={(event) => setName(event.target.value)} id="new_collection" className="w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" />
            </div>
            <Button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" title="Edit Collection" />
        </form>
    );
}

export default EditCollection;