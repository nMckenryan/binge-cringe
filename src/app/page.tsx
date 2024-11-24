"use client";
import { useEffect, useState } from "react";
import UICard from "./components/UICard";

export default function HomePage() {
  const [allTVShows, setAllTVShows] = useState<TVShowData[]>([]);

  interface Result {
    page: number;
    results: TVShowData[];
    total_pages: number;
    total_results: number;
  }

  interface TVShowData {
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

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
      options,
    )
      .then((res) => res.json() as Promise<Result>)
      .then((res) => setAllTVShows(res.results))
      .catch((err) => console.error(err));
  }, []);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    },
  };

  return (
    <main className="bg-background-black flex min-h-screen flex-col items-center justify-center text-white">
      <div className="flex flex-col gap-1">
        <UICard>
          <h2 className="card-title">Welcome to bingecringe</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </UICard>
        <UICard>
          <h2 className="card-title">Welcome to bingecringe</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </UICard>
      </div>
    </main>
  );
}
