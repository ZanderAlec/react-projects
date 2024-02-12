import { Button } from "./Button"
import { Menu } from "./Menu";

export const Header = () => {

    return <div className="flex justify-between	mt-4 mb-4">
        <div className="flex space-x-8 items-center justify-between w-full lg:w-fit">
            <h1 className="font-bold text-xl ">Logo</h1>
            <Menu/>
        </div>

        <div className="space-x-8 hidden lg:block">
            <button className="underline  decoration-solid inline bor hover:font-semibold" href="#" >Sign in</button>
            <Button text="Get Started" />
        </div>

    </div>

}