export const Button = ({text, dark = false, customStyle}) => {
    return <button 
    className = {`  border-2 border-solid ${dark ? " text-slate-50 bg-black border-black" 
    : " border-black text-black bg-white"}  
    py-2 px-6 rounded-md ${customStyle}`} 
    >{text}</button>
}