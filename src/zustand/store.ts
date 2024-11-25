import { create } from 'zustand'

export type TVShowData = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}





interface Store {
    tv_data: TVShowData[]
    populate_tv_data: (newTVData: TVShowData[]) => void
}

export const useTVStore = create<Store>()((set) => ({
    tv_data: [],
    populate_tv_data: (newTVData: TVShowData[]) => set(() => ({ tv_data: newTVData })),
}))