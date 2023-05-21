import { useState } from "react"

export const MenuToggle = () => {
    const [IsOpenMenu, setIsOpenMenu] = useState(false)

    const toggleMenu = () => {
        setIsOpenMenu(menuState => !menuState)
    }

    return {
        // properties
        IsOpenMenu,

        // methods
        toggleMenu
    }
}
