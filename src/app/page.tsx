"use client";
import UICard from "./components/UICard";
import EmblaCarousel from "./components/Embla-Carousel";
import "../styles/embla.css";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background-black text-white">
      <div className="flex flex-col gap-1">
        <UICard>
          <h2 className="card-title">Welcome to bingecringe</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </UICard>
        <UICard>
          <EmblaCarousel />
        </UICard>
      </div>
    </main>
  );
}
