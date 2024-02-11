import { Button } from "./Button"
import burguerIcon from "../assets/burguer-menu.png";
import { useState } from 'react';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return <div className="flex justify-between	mt-4 mb-4">
        <div className="flex space-x-8 items-center justify-between w-full lg:w-fit">
            <h1 className="font-bold text-xl ">Logo</h1>

            {/*burguer icon */}
            <div className="lg:hidden w-6	">
                <button onClick={() => setMenuOpen(prev => !prev)}>
                    <img className="w-full" src={burguerIcon} alt="menu" />
                </button>
            </div>

            <menu className={`lg:space-x-8  lg:decoration-solid lg:block underline 
            ${menuOpen ? "block" : "hidden"}`}
            >
                <a href="#">Pricing</a>
                <a href="#">Services</a>
                <a href="#">Use Cases</a>
            </menu>
        </div>

        <div className="space-x-8 hidden lg:block">
            <p className="underline  decoration-solid inline" href="#" >Sign in</p>
            <Button text="Get Started" />
        </div>

    </div>

}