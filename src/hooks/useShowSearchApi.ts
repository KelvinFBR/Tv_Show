import { ShowDetail } from "../models/index.type"
import { ShowServices } from "../services/showServices"

import { useState, useEffect } from "react"

const showServices = new ShowServices()
let totalPages: number;

const useShowSearchApi = () => {
    const [querySearch, setQuerySearch] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [showsResultSearch, setShowsResultSearch] = useState<ShowDetail[]>([])

    const setQuerySearchShow = (newQuery: string) => {
        if (!newQuery) return
        setQuerySearch(newQuery)
    }

    const getShows = async (q: string) => {
        try {
            setIsLoading(true)
            const resp = await showServices.getShows(`${q}`)
            if (!resp) return

            totalPages = resp.data.pages
            setShowsResultSearch(resp.data.tv_shows)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (!querySearch) return
        getShows(querySearch)
    }, [querySearch])


    return {
        // properties
        isLoading,
        totalPages,
        querySearch,
        showsResultSearch,

        // methods
        setQuerySearchShow,
        getShows,
    }
}

export default useShowSearchApi