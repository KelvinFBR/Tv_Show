import { SearchShowsDetails } from "../models/index.type";
import tvShowApi from "./tvShowsApi";

export class ShowServices {

    async getShows(q = "") {
        try {
            const resp = await tvShowApi.get(`/search?q=${q}`);
            const { data, status } = resp
            return { status, data }
        } catch (error) {
            console.log(error)
        }
    }

    async getMostPopularShows(page = "1"): Promise<{ status: number, data: SearchShowsDetails } | void> {
        try {
            const resp = await tvShowApi.get(`/most-popular?page=${page}`);
            const { data, status } = resp
            return { status, data }
        } catch (error) {
            console.log(error)
        }
    }

    async getShowDetail(q = "") {
        try {
            const resp = await tvShowApi.get(`/show-details?q=${q}`);
            const { data, status } = resp
            return { status, data }
        } catch (error) {
            console.log(error)
        }
    }
}