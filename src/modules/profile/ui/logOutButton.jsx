
const LogOutButton = ({action}) => {
    return (
        <button
            onClick={action}
            className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
            <img src="/logOut.png"  alt="logOut icon" className='w-7 h-7' />
            <span className="ml-3">
                Log Out
            </span>
        </button>

    )
}

export default LogOutButton;