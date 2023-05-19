export class ShowServices {

    getShows(q = "") {
        return `shows ${q}`
    }
    getMostPopularShows() {
        console.log(`most popular shows`)
    }
}