export type ShowDetail = {
    id: number;
    name: string;
    permalink: string;
    start_date: null | string;
    end_date: null | string;
    country: string;
    network: string;
    status: string;
    image_thumbnail_path: string;
}

export interface MostPopularShowDetail {
    total: string,
    page: number,
    pages: number,
    tv_shows: [
        {
            id: number;
            name: string;
            permalink: string;
            start_date: null | string;
            end_date: null | string;
            country: string;
            network: string;
            status: string;
            image_thumbnail_path: string;
        }
    ]
}