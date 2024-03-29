import { useEffect, useState } from "react"

export const Title = ({ className, onRename, maxLength = 50, title }) => {

    const [value, setValue] = useState("");

    useEffect(() => setValue(title)
    , [title]);

    function handleChange(event) {
        // Set the dinamic size of textArea:
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';

        setValue(event.target.value);
    }

    function handleBlur() {
        onRename(value);
    }

    return <textarea id = "title-input" rows='1' type="text" className={`${className} title-input`} value={value}
            maxLength={maxLength}
            onChange={(event) => handleChange(event)}
            onBlur={() => handleBlur()}
        />


}