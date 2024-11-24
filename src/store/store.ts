import { create } from 'zustand'

interface TV_Show_Review {
    name: string
    review_score: number
}

const useStore = create((set) => ({
    tv_show_names: [],
    tv_show_reviews: [],
    add_tv_show_review: (tv_show_review: TV_Show_Review) => set((state) => ({ tv_show_reviews: [...state.tv_show_reviews, tv_show_review] })),
}))
