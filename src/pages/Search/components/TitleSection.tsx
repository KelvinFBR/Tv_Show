import { ShowsDetailsCards } from "../../../models/index.type"

const TitleSection = ({ showsResultSearch, query = "" }: { showsResultSearch: ShowsDetailsCards[], query: string }) => {
    return (
        <div className="relative max-w-max">
            <h3 className="font-medium text-2xl text-[#EFEFEF]">Results: {showsResultSearch.length > 0 ? query : `No results found for "${query}"`}</h3>
            <span className="z-0 block w-[70px] h-1 bg-[#F66B0E] rounded-sm"></span>
        </div>
    )
}

export default TitleSection