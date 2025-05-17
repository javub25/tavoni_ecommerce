import { createContext, useContext} from "react";
import { useButtons } from "@/features/Carousel/hooks/useButtons.ts";
import { useCarousel } from "@/features/Carousel/hooks/useCarousel.ts";
import { CarouselContextType } from "@/features/Carousel/types/Carousel";

const CarouselContext = createContext<CarouselContextType | null>(null);

const CarouselProvider = ({children}: {children: React.ReactElement}) => 
{
    const {emblaRef, emblaApi} = useCarousel();
    const { prevDisabled, nextDisabled, onPrevClick, onNextClick } = useButtons(emblaApi);

    const CarouselValues = {
        emblaRef,
        emblaApi,
        prevDisabled,
        nextDisabled,
        onPrevClick,
        onNextClick
    }

    return (
        <CarouselContext.Provider value={CarouselValues}>
            {children}
        </CarouselContext.Provider>
    )
}

const useCarouselContext = () => 
{
    const context = useContext(CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a CarouselProvider");
    }
    return context
}

export {CarouselProvider, useCarouselContext}