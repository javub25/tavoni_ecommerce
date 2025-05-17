import { ProductInfoType } from "@/features/Carousel/types/Carousel"

export const showProductDetails = ({setProductInfo, product, setIsVisible}: ProductInfoType) => {
    setProductInfo(product);
    setIsVisible(true);
}