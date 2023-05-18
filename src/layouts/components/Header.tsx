import { MenuToggle } from "../../hooks/menuToggle"
import BtnToggleMenu from "./BtnToggleMenu"
import Menu from "./Menu"

const Header = () => {
    const { IsOpenMenu, toggleMenu } = MenuToggle()

    return (
        <nav className="flex justify-between z-10 px-7 h-[60px] items-center bg-slate-800 text-white" >
            <h1 className="font-bold text-xl"><a href="/">TvShow</a></h1>

            <Menu menuState={IsOpenMenu} />

            <div className="flex items-center gap-4">
                {/* Todo:  sera un componente aparte */}
                <div>Search</div>
                <BtnToggleMenu IsOpenMenu={IsOpenMenu} toggleMenu={toggleMenu} />
            </div>
        </nav >
    )
}

export default Header