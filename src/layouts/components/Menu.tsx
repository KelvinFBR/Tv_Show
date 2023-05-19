import { MenuProps } from "../models/types/index.type"

const Menu = ({ menuState }: MenuProps) => {
    return (
        <ul className={`absolute left-0 top-0 md:relative md:flex md:justify-center w-full -z-0 md:z-0 bg-slate-500 md:bg-transparent
        transition-all md:translate-y-0 ${menuState ? "translate-y-[60px]" : "translate-y-[-100%]"} md:translate-x-0`}>
            <li className="m-7 text-center font-medium text-lg transition-all  hover:border-b-2"><a href="/">Home</a></li>
            <li className="m-7 text-center font-medium text-lg transition-all hover:border-b-2"><a href="#">Most Popular</a></li>
            <li className="m-7 text-center font-medium text-lg transition-all hover:border-b-2"><a href="#">Contact</a></li>
        </ul>
    )
}

export default Menu