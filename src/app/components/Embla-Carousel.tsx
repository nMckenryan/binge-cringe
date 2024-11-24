import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: number[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides } = props;
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(
    OPTIONS,
    // , [Autoplay()]
  );

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
