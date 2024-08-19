const Input = ({ type = 'text', placeholder = '', id, required = false,  action, value, className = null}) => {
    return (
        <input
            required={required}
            value={value}
            id={id}
            onChange={action}
            className={className ? className :"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"}
            type={type} placeholder={placeholder} />
    );
}

export default Input;