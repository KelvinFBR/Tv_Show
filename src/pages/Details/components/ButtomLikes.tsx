import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { useState } from "react";

const ButtomLikes = () => {
    const [Islike, setIslike] = useState(false)

    const toggleLikeTvShow = () => {
        setIslike(likeState => !likeState)
    }

    return (
        <div onClick={toggleLikeTvShow} className=" m-3 transition-all active:scale-110 z-30 text-2xl cursor-pointer">
            {Islike ? (
                <span className="text-[#F66B0E]">
                    <AiFillHeart />
                </span>
            ) : (
                <AiOutlineHeart />
            )
            }
        </div>

    )
}

export default ButtomLikes