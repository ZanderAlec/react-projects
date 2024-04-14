import about_img from '../assets/about-background-image.png'
import { MdOutlinePlayCircleFilled } from "react-icons/md";


const About = () => {
  return (
    <section className='container flex-right about-bkg'>
      <div className='text-container right'>
        <h3 className='subtitle'>About</h3>

        <h2 className='title'>Food Is An Important Part Of A Balanced Diet</h2>

        <p className='text'>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt
          magna non et elit. Dolor  turpis molestie dui
          magnis facilisis at fringilla quam.
        </p>

        <p className='text'>

          Non tincidunt magna non et elit. Dolor turpis molestie
          dui magnis facilisis at fringilla quam.

        </p>

        <div className='flex-btwn--center'>
          <button className='bttm bkg-yellow'>Learn More</button>

          <button className="watch-bttm bkg-light">
            <MdOutlinePlayCircleFilled className='bttm-icon--big' /> Watch video
          </button>
        </div>
      </div>


      <img className="about-banner" src={about_img} alt="" />
    </section>
  )
}

export default About