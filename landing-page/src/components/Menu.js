import burguerIcon from "../assets/burguer-menu.png";
import closeBttm from "../assets/closeBttm.png";
import { useState } from 'react';


export const Menu = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return <div >

        {/*dark bkg*/}
        <div className= {menuOpen && "absolute left-0 top-0 opacity-90 w-full h-full bg-black z-0"} ></div>

        {/*burguer/close menu */}
        <button className={`lg:hidden w-6 ${menuOpen && "absolute right-4"}`} 
                onClick={() => setMenuOpen(prev => !prev)}>
            <img className="w-full" src={ menuOpen ? closeBttm : burguerIcon} alt="menu" />
        </button>

        <menu className={`lg:space-x-8  lg:decoration-solid lg:block underline 
                            ${menuOpen ? " absolute right-4 top-20 z-40 text-white flex flex-col text-right	gap-4" : "hidden"}`}
        >
            <a className="hover:font-semibold" href="\algo">Pricing</a>
            <a className="hover:font-semibold" href="#">Services</a>
            <a className="hover:font-semibold" href="#">Use Cases</a>
        </menu>

        

    </div>

}