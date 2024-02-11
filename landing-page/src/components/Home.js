import { Header } from "./Header";
import { Button } from "./Button";
import { Company } from "./Company";
import { Card } from "./Card";

import CardImage  from "../assets/bkg.jpg"


export const Home = () => {
    return <div >
        {/*Container */}
        <div className=' pl-4 pr-4 md:pl-8 md:pr-8'>
            <Header />
        </div>

        {/*banner */}
        <div className="bg-blue-200 py-10">
            <div className="mx-auto	w-4/5 md:w-3/5	">

                <h2 className="lg:text-7xl text-4xl	 text-center mb-7 font-thin">
                    <span className="font-bold	block">Lorem Ipsum</span>
                    is simply dummy text of
                </h2>

                <p className="mb-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <div className="text-center">
                    <Button text="Get Started" dark={true} customStyle="md:mr-4 sm: mb-4" />
                    <Button text="Book a demo" />
                </div>

            </div>
        </div>

        {/*company logos */}
        <div className="bg-black px-8 py-10 flex justify-between flex-wrap	">
            <Company />
            <Company />
            <Company />
            <Company />
            <Company />
            <Company />
            <Company />
        </div>


        {/*Container cards*/}
        <div className=' pl-4 pr-4 md:pl-8 md:pr-8 pb-8 '>
            <div className="py-10 mx-auto	lg:w-3/5">
                <h2 className="lg:text-7xl text-4xl text-center mb-7 font-thin" >Lorem Ipsumis simply dummy text of </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className ="flex flex-col gap-3	md:flex-row	 justify-between ">
                <Card
                    title="Lorem Ipsum"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    img = {CardImage}
                />

                <Card
                    title="Lorem Ipsum"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    img = {CardImage}
                />

                <Card
                    title="Lorem Ipsum"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    img = {CardImage}
                />

                <Card
                    title="Lorem Ipsum"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    img = {CardImage}
                />
            </div>

        </div>

    </div>
}