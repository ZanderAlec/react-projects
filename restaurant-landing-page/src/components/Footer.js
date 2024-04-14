import logo from '../assets/Logo.svg'

import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";


export const Footer = () => {

    return <section className="info-container flex-btwn">
        <div>
            <img className="footer-logo" src={logo} alt="Foodie" />
            <div className='flex-btwn'>
                <TiSocialTwitter className='icon--mid'/> 
                <TiSocialLinkedin className='icon--mid'/> 
                <TiSocialYoutube className='icon--mid'/> 
             <TiSocialFacebook className='icon--mid'/> 
            </div>
        </div>
        <div className="flex-btwn">
            <ul className="footer-list">
                <li className="footer-list-item">Quality</li>
                <li className="footer-list-item">Help</li>
                <li className="footer-list-item">Share</li>
                <li className="footer-list-item">Carrers</li>
                <li className="footer-list-item">Work</li>
                <li className="footer-list-item">Testimonials</li>
            </ul>

            <ul className="footer-list">
                <li>
                    244-5333-7783
                </li>
                <li>
                    hello@food.com
                </li>
                <li>
                    press@food.com
                </li>
                <li>
                    contact@food.com
                </li>
            </ul>

            <ul className="footer-list">
                <li className="footer-list-item">
                    Terms & Conditions
                </li>
                <li className="footer-list-item">
                    Privacy Policy
                </li>
            </ul>
        </div>
    </section>
}