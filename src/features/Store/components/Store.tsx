import { useCartContext } from "@/contexts/Cart-context.tsx";
import { CarouselProvider } from "@/features/Carousel/context/Carousel-context";
import { Carousel } from "@/features/Carousel/components/Carousel.tsx";
import { useProducts } from "@/features/Store/services/useProducts";
import { useProductInfo } from "@/features/Store/hooks/useProductInfo";
import { useVisible } from "@/features/Store/hooks/useVisible";
import { Loader } from "@/features/Store/components/Loader";
import { ProductInfo } from "@/features/Store/components/ProductInfo";

const Store = () => 
{
    const {loading} = useProducts();
    const {setCart} = useCartContext();
    const {productInfo, setProductInfo} = useProductInfo();
    const {isVisible, setIsVisible} = useVisible();

    return (
        <>
            {loading ? <Loader /> : 
                <>
                    <CarouselProvider>
                        <Carousel setProductInfo={setProductInfo} setIsVisible={setIsVisible} />
                    </CarouselProvider>

                    {isVisible ? <ProductInfo setCart={setCart} product={productInfo}/> : null}
                </>
            }
        </>    
    )
}
export default Store;