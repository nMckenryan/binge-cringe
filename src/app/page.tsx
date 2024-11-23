"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [allMovies, setAllMovies] = useState<MovieData[]>([]);

  interface Result {
    page: number;
    results: MovieData[];
    total_pages: number;
    total_results: number;
  }

  interface MovieData {
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
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
        );
        const data = (await response.json()) as Result;

        const movies = data.results;

        setAllMovies(movies);

        console.log(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    void fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div>Welcome to bingecringe</div>
    </main>
  );
}
