import { ShowDetail } from "../models/index.type"
import { ShowServices } from "../services/showServices"

import { useState, useEffect } from "react"

const showServices = new ShowServices()
let totalPages: number;

const useShowApi = () => {
    const [page, setPage] = useState(1)
    const [mostPopularShows, setMostPopularShows] = useState<ShowDetail[]>([])

    const setShowPage = (newPage: number) => {
        setPage(newPage)
    }

    const getShows = (q: string) => {
        const data = showServices.getShows(q)
        return { data }
    }

    const getMostPopularShows = async (pageShows: number) => {
        const resp = await showServices.getMostPopularShows(`${pageShows}`)
        if (!resp) return

        totalPages = resp.data.pages
        setMostPopularShows(resp.data.tv_shows)
    }

    useEffect(() => {
        console.log("d")
        getMostPopularShows(page)
    }, [page])


    return {
        // properties
        page,
        totalPages,
        mostPopularShows,

        // methods
        setShowPage,
        getShows,
    }
}

export default useShowApi