import useEmblaCarousel from "embla-carousel-react";

export const useCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    return {emblaRef, emblaApi};
}