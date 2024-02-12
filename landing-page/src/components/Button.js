export const Button = ({text, dark = false, customStyle}) => {
    return <button 
    className = {`  border-2 border-solid ${dark ? " text-slate-50 bg-black border-black hover:bg-gray-700" 
    : " border-black text-black bg-white hover:bg-slate-400"}  
    py-2 px-6 rounded-md ${customStyle}`} 
    >{text}</button>
}