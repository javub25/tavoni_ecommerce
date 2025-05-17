import infoIcon from "@/features/Store/assets/img/info.svg"
import { ProductInfoType } from "@/features/Carousel/types/Carousel"
import { showProductDetails } from "@/features/Store/utils/showProductDetails"

export const ProductInfoButton = ({setProductInfo, product, setIsVisible}: ProductInfoType) => 
{    
    return (
        <ul className="text-center mt-4">
            <li>
                <a href="#product" className="inline-flex px-4 py-2 items-center gap-3 text-white rounded-full my-[12px] bg-[#1558A4] text-black hover:bg-[#2A7AD5] cursor-pointer"
                onClick={() => showProductDetails({setProductInfo, product, setIsVisible})}>
                    <img className="w-9 h-9" src={infoIcon} alt="Info Icon"/>
                    More Info
                </a>
            </li>    
        </ul>
    )
}