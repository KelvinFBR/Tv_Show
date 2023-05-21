import { MostPopularShowDetail } from "../models/index.type";
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

    async getMostPopularShows(page = "1"): Promise<{ status: number, data: MostPopularShowDetail } | void> {
        // console.log(`most popular shows  ${page}`)
        try {
            const resp = await tvShowApi.get(`/most-popular?page=${page}`);
            const { data, status } = resp
            return { status, data }
        } catch (error) {
            console.log(error)
        }
    }
}