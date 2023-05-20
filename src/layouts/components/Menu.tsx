import { MenuProps } from "../models/types/index.type"

const Menu = ({ menuState }: MenuProps) => {
    return (
        <ul className={`absolute left-0 top-0 md:relative md:flex md:justify-center w-full z-10 md:z-0 bg-[#112B3C] md:bg-transparent
        transition-all md:translate-y-0 ${menuState ? "translate-y-[60px]" : "translate-y-[-100%]"} md:translate-x-0`}>
            <li className="m-7 text-center font-medium text-lg transition-all max-w-max border-[#F66B0E] hover:border-b-2"><a href="/">Home</a></li>
            <li className="m-7 text-center font-medium text-lg transition-all max-w-max border-[#F66B0E] hover:border-b-2"><a href="#mostpopular">Most Popular</a></li>
            <li className="m-7 text-center font-medium text-lg transition-all max-w-max border-[#F66B0E] hover:border-b-2"><a href="#contact">Contact</a></li>
        </ul>
    )
}

export default Menu