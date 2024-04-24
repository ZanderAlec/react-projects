import { useEffect, useState, useRef } from "react"

export const Title = ({ className, onRename, maxLength = 50, title, onEdit }) => {

    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => setValue(title)
    , [title]);

    function handleChange(event) {
        // Set the dinamic size of textArea:
        console.log(inputRef.current);
        inputRef.current.style.height = 'auto';
        inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
        setValue(event.target.value);
    }

    function handleBlur() {
        onRename(value);
        onEdit && onEdit(false)
    }

    return <textarea id = "title-input" rows='1' type="text" 
            className={`${className} title-input`} value={value}
            maxLength={maxLength}
            onClick={() => inputRef.current.select()}
            onFocus={() =>  onEdit &&  onEdit(true) }
            onChange={(event) => handleChange(event)}
            onBlur={() => handleBlur()}
            ref = {inputRef}
        />


}