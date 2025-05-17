import {useState, useEffect} from "react";
import type { EmblaCarouselType } from "embla-carousel"
import { onPrevClick } from "@/features/Carousel/utils/onPrevClick";
import { onNextClick } from "@/features/Carousel/utils/onNextClick";
import { updateNavigation } from "@/features/Carousel/utils/updateNavigation";

export const useButtons = (carousel: EmblaCarouselType | undefined) => 
{
  const [prevDisabled, setPrevDisabled] = useState<boolean>(false)
  const [nextDisabled, setNextDisabled] = useState<boolean>(false)

  const setupCarouselNav = (carousel : EmblaCarouselType) => {

    const buttons = {carousel, setPrevDisabled, setNextDisabled}

    carousel.on("select", () => updateNavigation(buttons))

    return () => 
    {
      carousel.off("select", () => updateNavigation(buttons))
    }
  } 

  useEffect(() => {

    if(!carousel) return

    const cleanup = setupCarouselNav(carousel)
    
    return cleanup;

  }, [carousel])

  return { prevDisabled, nextDisabled, onPrevClick, onNextClick }
}