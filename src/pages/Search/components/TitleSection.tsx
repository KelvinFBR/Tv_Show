const TitleSection = ({ query = "" }: { query: string }) => {
    return (
        <div className="relative max-w-max">
            <h3 className="font-medium text-2xl">Results: {query ? query : "No results found"}</h3>
            <span className="z-0 block w-[40%] h-1 bg-[#F66B0E] rounded-sm"></span>
        </div>
    )
}

export default TitleSection