import { CarouselButtonType } from "@/features/Carousel/types/Carousel";

export const updateNavigation = (params: CarouselButtonType) => {
    const {carousel, setPrevDisabled, setNextDisabled} = params
    setPrevDisabled(!carousel?.canScrollPrev())
    setNextDisabled(!carousel?.canScrollNext())
}