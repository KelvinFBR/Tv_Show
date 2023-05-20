import { MenuToggle } from "../../hooks/useMenuToggle"
import BtnToggleMenu from "./BtnToggleMenu"
import Menu from "./Menu"
import Search from "./Search"

const Header = () => {
    const { IsOpenMenu, toggleMenu } = MenuToggle()

    return (
        <nav className="flex justify-between z-10 px-7 h-[60px] items-center bg-[#112B3C] text-white" >
            <h1 className="font-bold text-xl text-[#F66B0E]"><a href="/">TvShow</a></h1>
            <Menu menuState={IsOpenMenu} />

            <div className="flex items-center gap-4">
                <Search />
                <BtnToggleMenu IsOpenMenu={IsOpenMenu} toggleMenu={toggleMenu} />
            </div>
        </nav >
    )
}

export default Header