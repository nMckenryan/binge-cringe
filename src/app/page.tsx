"use client";
import UICard from "./components/UICard";
import EmblaCarousel from "./components/Embla-Carousel";
import "../styles/embla.css";
import { type TVDB_Response, useTVStore } from "~/zustand/store";
import { useEffect } from "react";

export default function HomePage() {
  const store = useTVStore();

  const tvdb_options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TVDB_TOKEN}`,
    },
  };

  useEffect(() => {
    fetch("https://api4.thetvdb.com/v4/series", tvdb_options)
      .then((response) => response.json() as Promise<TVDB_Response>)
      .then((data) => {
        store.populate_tv_data(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background-black text-white">
      <div className="flex flex-col gap-1">
        {/* <UICard>
          <h2 className="card-title">Welcome to bingecringe</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </UICard> */}
        <UICard>
          <EmblaCarousel />
        </UICard>
      </div>
    </main>
  );
}
