export type ShowsDetailsCards = {
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

export interface SearchShowsDetails {
    total: string,
    page: number,
    pages: number,
    tv_shows: ShowsDetailsCards[]
}

export interface Episode {
    season: number;
    episode: number;
    name: string;
    air_date: Date;
}
export interface ShowDetails {
    id: number;
    name: string;
    permalink: string;
    url: string;
    description: string;
    description_source: null;
    start_date: Date;
    end_date: null;
    country: string;
    status: string;
    runtime: number;
    network: string;
    youtube_link: null;
    image_path: string;
    image_thumbnail_path: string;
    rating: string;
    rating_count: string;
    countdown: null;
    genres: string[];
    pictures: string[];
    episodes: Episode[];
}