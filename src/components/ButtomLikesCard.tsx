import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


const ButtomLikesCard = () => {

    const [Islike, setIslike] = useState(false)

    const toggleLikeTvShow = () => {
        setIslike(likeState => !likeState)
    }

    return (
        <div onClick={toggleLikeTvShow} className="absolute top-0 right-0 m-3 transition-all active:scale-110 z-30 text-2xl">
            {Islike ? (
                <span className="absolute top-0 right-0 text-[#F66B0E]">
                    <AiFillHeart />
                </span>
            ) : (
                <AiOutlineHeart />
            )
            }
        </div>
    )
}

export default ButtomLikesCard