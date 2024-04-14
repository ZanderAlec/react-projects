import { WorkCard } from './WorkCard';
import pick_icon from '../../assets/pick-meals-image.png'
import delivery_icon from '../../assets/delivery-image.png'
import choose_icon from '../../assets/choose-image.png'


const Work = () => {
    const cards = [
        {
            icon: pick_icon,
            title: "Pick Meals" ,
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum." ,
        },
        
        {
            icon: choose_icon,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
        },

        {
            icon: delivery_icon,
            title: "Fast Deliveries",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
        }
    ]

  return (
    <section className=' info-container'>
    <div className="text-container center ">
      <h3 className="subtitle">Work</h3>
      <h2 className="title">How it works</h2>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt
        magna non et elit. Dolor  turpis molestie dui
        magnis facilisis at fringilla quam.
      </p>
    </div>

    <div className="flex-btwn ">
      {
        cards.map((card, index) => (
            <WorkCard key={ index } card = { card }/>
        ))
      }
    </div>
  </section>
  )
}

export default Work