const TextArea =  ({id, rows, className, placeholder, value, onChange}) => {
    return (
        <textarea value={value} onChange={onChange} id={id} rows={rows} className={className} placeholder={placeholder}></textarea>
    );
}

export default TextArea;