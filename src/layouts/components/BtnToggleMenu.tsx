import { BtnToggleMenuProps } from "../models/types/index.type"

const BtnToggleMenu = ({ IsOpenMenu, toggleMenu }: BtnToggleMenuProps) => {
    return (
        <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
            <span className={`block rounded-full w-6 h-[0.2rem] bg-white transition-all ${IsOpenMenu ? "-rotate-45 translate-y-[0.2rem]" : null}`}></span>
            <span className={`block rounded-full w-6 h-[0.2rem] bg-white transition-all ${IsOpenMenu ? "rotate-45" : "mt-1"}`}></span>
        </div>
    )
}

export default BtnToggleMenu