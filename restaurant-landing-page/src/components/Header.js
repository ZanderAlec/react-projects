import logo from '../assets/Logo.svg'
import { FaCartShopping } from "react-icons/fa6";


export const Header = () => {
    return (

        <div className="header container flex-btwn--center">
            <img src={logo} alt="Logo" className='logo' />

            <div className="flex-btwn--center">
                <menu>
                    <ul className="flex-btwn menu">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Testimonials</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </menu>

                <button className="icon">
                    <FaCartShopping />
                </button>

                <button className="bttm bkg-light">Booking Now</button>
            </div>
        </div>
    );
}