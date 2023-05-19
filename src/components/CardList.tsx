import { CardProps } from "../models/index.type"


const CardList = ({ data }: { data: CardProps }) => {
    const year = data.start_date?.split("-")[0] || "Date not available"

    return (
        <div className="text-[#EFEFEF] relative overflow-hidden rounded-xl w-full min-w-[200px] max-w-[300px] sm:max-w-[220px] max-h-[340px] cursor-pointer [&>*:nth-child(3)]:hover:scale-105">
            <img src={data.image_thumbnail_path} className="w-full h-full object-cover object-top" alt="show image" />
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

export default CardList