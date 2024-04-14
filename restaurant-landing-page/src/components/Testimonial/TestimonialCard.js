import { LiaStarSolid } from "react-icons/lia";


export const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="test-container center bkg-white">
            <div className="card-icon">
                <img className="img" src={testimonial.img} alt="" />
            </div>
            <p className="test-text">{testimonial.text}</p>

            <div className="test-stars flex-btwn">
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarSolid />
            </div>

            <h2 className="test-name">{testimonial.name}</h2>
        </div>
    );
}