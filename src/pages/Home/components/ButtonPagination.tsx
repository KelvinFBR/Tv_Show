import { ButtonPaginationProps } from "../models/index.types"

const ButtonPagination = ({ page, totalPages, setShowPage }: ButtonPaginationProps) => {

    const handdlePrevPage = () => {
        if (page <= 1) return
        setShowPage(page - 1)
    }

    const handdleNextPage = () => {
        console.log(totalPages)
        if (page >= totalPages) return
        setShowPage(page + 1)
    }

    const handdleNewPage = (page: number) => {
        if (page < 1) return
        setShowPage(page)
    }

    const buttonsPagination = [
        { id: 1, page: page - 2 },
        { id: 2, page: page - 1 },
        { id: 3, page },
        { id: 4, page: page + 1 },
        { id: 5, page: page + 2 },
    ]


    return (
        <div className="w-full h-full flex justify-center">
            <div className="bg-[#112B3C] flex justify-center items-center max-w-max rounded-xl h-full overflow-hidden font-medium text-[#EFEFEF]">
                <span className="cursor-pointer block p-3 h-full border-r-[0.01rem] hover:bg-[#F66B0E]" onClick={handdlePrevPage}>Prev</span>
                {buttonsPagination.map((btn) => (
                    btn.page <= 0 ? (<></>) : (
                        <span key={btn.id} className={` cursor-pointer block border-r-[0.01rem] p-3 h-full hover:bg-[#F66B0E] ${btn.page == page ? "bg-[#F66B0E]" : ""}`} onClick={() => { handdleNewPage(btn.page) }}>{btn.page}</span>
                    )
                ))
                }
                <span className="cursor-pointer block p-3 h-full border-r-[0.01rem]">...</span>
                <span className="cursor-pointer block p-3 h-full border-r-[0.01rem] hover:bg-[#F66B0E]" onClick={() => { handdleNewPage(totalPages) }}>{totalPages}</span>
                <span className="cursor-pointer block p-3 h-full border-r-[0.01rem] hover:bg-[#F66B0E]" onClick={handdleNextPage}>Next</span>
            </div>
        </div>
    )
}

export default ButtonPagination