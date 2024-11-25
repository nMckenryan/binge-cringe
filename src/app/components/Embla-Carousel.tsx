import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { TVShowData, useTVStore } from "../../zustand/store";

export default function EmblaCarousel() {
  const store = useTVStore();

  const get_options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
  };

  type Response = {
    page: number;
    results: TVShowData[];
    total_pages: number;
    total_results: number;
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
      get_options,
    )
      .then((response) => response.json())
      .then((data) => {
        store.populate_tv_data(data.results as Array<TVShowData>[]);
      })
      .catch((err) => console.error(err));
  }, []);

  const options: EmblaOptionsType = { dragFree: true, loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="embla mx-auto text-4xl">
      <h1 className="text-4xl">Popular Shows</h1>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {store.tv_data.map((tv, index) => (
            <div key={index}>
              <div
                className="card bg-base-100 shadow-xl"
                style={{ margin: "2px", minWidth: "200px" }}
              >
                <figure>
                  <img
                    className="bg-contain"
                    style={{ width: 200, height: 300 }}
                    src={
                      "https://image.tmdb.org/t/p/original/" + tv.poster_path
                    }
                    alt={tv.original_name + "_poster"}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-white">
                    {tv.name} {tv.original_name == null && tv.original_name}
                    <div className="badge badge-secondary">
                      {tv.original_language}
                    </div>
                  </h2>
                  <p className="line-clamp-3 text-sm text-white">
                    {tv.overview ? tv.overview : "No Description Available"}
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-secondary">
                      {tv.release_date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
