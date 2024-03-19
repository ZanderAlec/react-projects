import { useState, useEffect } from "react"

export const Title = ({className, onRename, maxLength = 50, children}) => {
    

    const [clicked, setClicked] = useState(false);
    const [value, setValue] = useState(children);


    function handleClick(){
        //Autofocus:
        const input = document.getElementById("title-input");
        input.focus();
        input.select();


        setClicked(true);
    }

    function handleChange(event){
        //Set the dinamic size of textArea:
        const input = document.getElementById("title-input");
        input.style.height='auto';
        input.style.height=input.scrollHeight+'px';


        setValue(event)
    }

    function handleBlur() {
        onRename(value);
        setClicked(false);
    }

    return <div className="title-box">
            <textarea id = "title-input" rows='1' type="text"  className = {`${className} title-input`} value={value} 
                maxLength={maxLength}
                onChange = {(event) => handleChange(event.target.value)} 
                onBlur = {() => handleBlur()}
            />        
            {!clicked && 
                <div className={`input-handler`}
                    onClick={() =>handleClick()}
                ></div>   
            } 
        </div>
        
}