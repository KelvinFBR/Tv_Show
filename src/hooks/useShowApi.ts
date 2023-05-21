import { ShowsDetailsCards } from "../models/index.type"
import { ShowServices } from "../services/showServices"

import { useState, useEffect } from "react"

const showServices = new ShowServices()
let totalPages: number;

const useShowApi = () => {
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [mostPopularShows, setMostPopularShows] = useState<ShowsDetailsCards[]>([])

    const setShowPage = (newPage: number) => {
        setPage(newPage)
    }

    const getMostPopularShows = async (pageShows: number) => {
        try {
            setIsLoading(true)
            const resp = await showServices.getMostPopularShows(`${pageShows}`)
            if (!resp) return

            totalPages = resp.data.pages
            setMostPopularShows(resp.data.tv_shows)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        console.log("d")
        getMostPopularShows(page)
    }, [page])



    return {
        // properties
        isLoading,
        page,
        totalPages,
        mostPopularShows,

        // methods
        setShowPage,
    }
}

export default useShowApi