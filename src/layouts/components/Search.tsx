import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai"
import { motion } from "framer-motion"


const Search = () => {
    const [IsSearchActive, setIsSearchActive] = useState(false)
    const refInputSeach = useRef<HTMLInputElement>(null)

    const navigate = useNavigate();

    const toggleSearch = () => {
        setIsSearchActive(searchState => !searchState)
    }

    const searchShow = (event: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault()

        const searchValue = refInputSeach.current?.value
        if (!searchValue?.trim()) return

        setIsSearchActive(false)
        navigate(`/search?q=${searchValue}`);
    }

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };


    return (
        <div className={`text-lg p-[0.05rem] w-full justify-center items-center rounded-full `}>
            <motion.div transition={spring} className={`min-w-max absolute left-0 right-0 m-auto z-10 flex items-start justify-center overflow-hidden transition-all  ${IsSearchActive ? "translate-y-[190%]" : "translate-y-[-180%]"}`}>
                <form onSubmit={searchShow}>
                    <input type="text" ref={refInputSeach} className="bg-[#112B3C] w-full h-full p-2 transition-all outline-none rounded-s-full" placeholder="Search" />
                </form>
                <span onClick={searchShow} className="transition-all hover:bg-[#f66b0e91] bg-[#F66B0E] rounded-e-full right-0 p-[0.63rem] z-10 text-xl cursor-pointer">
                    <AiOutlineSearch />
                </span>
            </motion.div>

            <div onClick={toggleSearch} className="bg-[#F66B0E] text-xl p-2 rounded-full cursor-pointer">
                <AiOutlineSearch />
            </div>
        </div >
    )
}

export default Search