import { useState } from "react";
import { getAndCheckUser } from "../../../../actions/currentUser";
import Button from "../../../../ui/button";
import Input from "../../../../ui/input";
import { createCollection } from "../../actions/index";

const AddCollectionForm = ({ closeModal = () => { } }) => {
    const [authUser, setAuthUser] = useState(null);
    const [name, setName] = useState('');
    getAndCheckUser((user) => setAuthUser(user));

    const handelSubmit = (e) => createCollection(e, name, authUser, closeModal);

    return (
        <form className='p-2' onSubmit={handelSubmit}>
            <div className="mb-5">
                <label htmlFor="new_collection" className="block mb-2 text-sm font-medium">Name</label>
                <Input value={name} action={(event) => setName(event.target.value)} id="new_collection" className="w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" />
            </div>
            <Button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" title="Create New Collection" />
        </form>
    );
}

export default AddCollectionForm;