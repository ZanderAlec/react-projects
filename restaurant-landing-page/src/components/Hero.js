import { Header } from './Header';
import home_banner from '../assets/home-banner-image.png'
import { FaArrowRightLong } from "react-icons/fa6";


const Hero = () => {
  return (
    <div className='hero'>
      <Header />

      {/*Banner----------------------- */}
      <section className='container'>
        <div className="text-container left">
          <h2 className='title'>
            Your favorite Food Delivered Hot & Fresh
          </h2>

          <p className='text'>
            Healthy switcher chefs do all the prep work, like
            peeding, chopping & marinating, so you can cook
            a fresh food.
          </p>

          <button className='bttm bkg-yellow'>
            Order now <FaArrowRightLong className='bttm-icon'/>
          </button>
        </div>

        <img className='home-banner' src={home_banner} alt="" />
      </section>
    </div>
  )
}

export default Hero