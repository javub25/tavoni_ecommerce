import { CartProps } from "@/features/Cart/types/Cart"
import { Product } from "@/features/Store/types/Product"
import type { EmblaViewportRefType } from "embla-carousel-react"
import type { EmblaCarouselType } from "embla-carousel"

export type BooleanFunction = (value: boolean) => void
type CarouselFunction = (value: EmblaCarouselType) => void
type CarouselValue = EmblaCarouselType | undefined;

export type CarouselType = {
    setProductInfo: (product: Product) => void
    setIsVisible: BooleanFunction
}

export type ProductInfoType = Pick<CarouselType, "setProductInfo" | "setIsVisible"> & Pick<CartProps, "product">

export type AddCartProps = CartProps

export type CarouselContextType = {
    emblaRef: EmblaViewportRefType,
    emblaApi: CarouselValue,
    prevDisabled: boolean,
    nextDisabled: boolean,
    onPrevClick: CarouselFunction,
    onNextClick: CarouselFunction
}

export type CarouselButtonType = {
    carousel: CarouselValue,
    setPrevDisabled: BooleanFunction,
    setNextDisabled: BooleanFunction
}

