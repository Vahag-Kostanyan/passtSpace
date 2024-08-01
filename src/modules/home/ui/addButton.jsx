import AddCollectionSVG from "../../../svg/addCollectionSVG.jsx";

const AddButton = ({ text = 'New Collection', onClick }) => {
    return (
        <button onClick={onClick} className="px-1 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg flex align-center justify-center gap-2 w-full">
            {text}  <AddCollectionSVG/>
        </button>
    )
}

export default AddButton;