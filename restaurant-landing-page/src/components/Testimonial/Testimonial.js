import React from 'react'
import { TestimonialCard } from './TestimonialCard'
import jonhDoePhoto from '../../assets/john-doe-image.png'

const Testimonial = () => {

    const testimonials = [
        {
            img:  jonhDoePhoto ,
            text: "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.",
            name: "John Doe"
        }
    ]

    return (
        <section className=' info-container'>
            <div className="text-container center ">
                <h3 className="subtitle">Testimonial</h3>
                <h2 className="title">What They Are Saying</h2>
                <p className="text">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt
                    magna non et elit. Dolor  turpis molestie dui
                    magnis facilisis at fringilla quam.
                </p>
            </div>

            {
                testimonials.map((testimonial, index) => (
                    <TestimonialCard key = {index} testimonial = {testimonial}/>
                ))
            }

        </section>
    )
}

export default Testimonial