const Button = ({title = '', onClick, className}) => {
    return (
        <button
            onClick={onClick}

            className={className ? className : "mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"}>
            <span className="ml-3">
                {title}
            </span>
        </button>
    );
}

export default Button;