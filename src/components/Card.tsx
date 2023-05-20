import { useNavigate } from "react-router-dom";
import { ShowDetail } from "../models/index.type"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const Card = ({ data }: { data: ShowDetail }) => {
    const [Islike, setIslike] = useState(false)

    const year = data.start_date?.split("-")[0] || "Date not available"

    const navigate = useNavigate();


    const handdleShowDetails = (id: number) => {
        navigate(`/details?q=${id}`);
    }

    const toggleLikeTvShow = () => {
        setIslike(likeState => !likeState)
    }


    return (
        <div className="text-[#EFEFEF] relative overflow-hidden rounded-xl w-full min-w-[200px] max-w-[300px] sm:max-w-[220px] max-h-[340px] cursor-pointer hover-details-card hover-bar-card hover-img-card">
            <img src={data.image_thumbnail_path} className="w-full h-full object-cover object-top" alt="show image" />
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
            <div id="btnDetails" className="absolute flex justify-center items-center opacity-0 bg-[#112b3c69] w-full h-full transition-all top-0 right-0 z-20 p-3">
                <button className="bg-[#F66B0E] rounded-lg px-4 py-2 font-medium transition-all hover:bg-[#f38339] " onClick={() => handdleShowDetails(data.id)}>View more</button>
            </div>
            <div className="absolute p-5 flex gap-y-2 flex-col justify-end h-full w-full bottom-0">
                <h2 className="text-3xl font-bold text-shadow">{data.name}</h2>
                <div className="text-[#efefefe0] text-sm text-shadow font-medium relative">
                    <div className="relative z-10">
                        <span>{year}</span> - <span>{data.network}</span>
                    </div>
                    <span className="z-0 block w-2/4 h-1 bg-[#F66B0E] rounded-sm"></span>
                </div>
            </div>
        </div>
    )
}

export default Card