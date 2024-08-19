const Button = ({title = '', onClick, className, variant}) => {

    const buttonClasses = `button ${variant} ${className}`;

    return (
        <button
            onClick={onClick}
            variant={variant}
            className={buttonClasses}>
            <span className="ml-3">
                {title}
            </span>
        </button>
    );
}

export default Button;