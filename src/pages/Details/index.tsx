import queryString from "query-string";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ButtomWatch from "./components/ButtomWatch";
import ButtomLikes from "./components/ButtomLikes";
import useShowDetails from "../../hooks/useShowDetails";
import Loading from "../../components/Loading";


const Details = () => {

    const { isLoading, showResultDetails, setQuerySearchShow } = useShowDetails()

    const location = useLocation();
    const { q = "" } = queryString.parse(location.search);

    useEffect(() => {
        setQuerySearchShow(q as string)
    }, [q, setQuerySearchShow])

    return isLoading
        ? (<Loading />)
        : (
            <>
                <section className="relative xl:absolute flex justify-center items-center flex-col xl:flex-row w-full h-full ">
                    <div className="h-[500px] w-full sm:max-w-xl p-10 xl:h-full xl:w-[740px]">
                        <img className="h-full w-full object-cover object-top rounded-xl overflow-hidden" src={showResultDetails?.image_path} alt="image details" />
                        {/* <div className="absolute top-0 -z-10 h-full w-full bg-[#205375]"></div> */}
                    </div>
                    <div className="flex w-full h-full flex-col gap-1 py-10 px-12 text-[#EFEFEF] sm:items-center sm:text-center xl:items-start xl:text-left ">
                        <h1 className="text-4xl font-bold mb-4">{showResultDetails?.name}</h1>
                        <div>
                            ⭐ <span>{parseFloat(showResultDetails?.rating || "0").toFixed(1)}</span> | <span>{showResultDetails?.network}</span> | <span>{showResultDetails?.episodes.length} Episodes</span>
                        </div>
                        <div className="text-[#efefefad] ">
                            {showResultDetails?.genres.map(genre => (
                                <span key={genre} className="text-sm ml-1">{genre} |</span>
                            ))}
                        </div>
                        <p className="w-full max-w-xl">{showResultDetails?.description}</p>

                        <div className="flex mt-4">
                            <ButtomWatch />
                            <ButtomLikes />
                        </div>

                    </div>
                </section>
            </>
        )
}

export default Details