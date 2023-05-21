import { ShowDetails } from "../models/index.type"
import { ShowServices } from "../services/showServices"

import { useState, useEffect } from "react"

const showServices = new ShowServices()
let totalPages: number;

const useShowDetails = () => {
    const [querySearch, setQuerySearch] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [showResultDetails, setShowResultDetails] = useState<ShowDetails>()

    const setQuerySearchShow = (newQuery: string) => {
        if (!newQuery) return
        setQuerySearch(newQuery)
    }

    const getShowDetails = async (q: string) => {
        try {
            setIsLoading(true)
            const resp = await showServices.getShowDetail(`${q}`)
            if (!resp) return

            setShowResultDetails(resp.data.tvShow)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (!querySearch) return
        getShowDetails(querySearch)
    }, [querySearch])


    return {
        // properties
        isLoading,
        totalPages,
        querySearch,
        showResultDetails,

        // methods
        setQuerySearchShow,
        getShowDetails,
    }
}

export default useShowDetails