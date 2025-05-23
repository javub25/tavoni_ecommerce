import { useProducts } from "@/features/Store/services/useProducts";
import { useCarouselContext } from "@/features/Carousel/context/Carousel-context";
import { Product } from "@/features/Store/types/Product";
import { ProductInfoButton } from "@/features/Carousel/components/ProductInfoButton";
import { Navigation } from "@/features/Carousel/components/Navigation.tsx";
import { CarouselType } from "@/features/Carousel/types/Carousel";
import '@/features/Carousel/styles/carousel.css';
import { addInitialProductQty } from "@/features/Store/utils/addInitialProductQty";


export const Carousel = ({setProductInfo, setIsVisible}: CarouselType) => {
    
    const {products} = useProducts();
    const {emblaRef} = useCarouselContext();
        
    return (
       <>
            <article className="carrousel">
                <div className="carrousel__viewport"  ref={emblaRef}>
                    <div className="carrousel__items">
                        {products.map((product: Product, index) => {
                            const {id, title, images: [image], category} = product;
                            
                                addInitialProductQty(product);

                                return (
                                    <div key={id} className="carrousel__item">
                                        <div className="w-[100px] h-[50px] ml-auto bg-black text-white p-3 rounded-full text-center">
                                            {category}
                                        </div>    
                                        <img src={image} alt={title} className="mx-auto w-[280px] h-[280px]" 
                                            loading={index < 3 ? "eager" : "lazy"}
                                            fetchPriority={index === 0 ? "high" : "auto"}
                                        />
                                        <h1 className="text-black text-md font-bold text-center mt-4">{title}</h1>
                                        <ProductInfoButton setProductInfo={setProductInfo} product={product} setIsVisible={setIsVisible}/>
                                        <p className="text-base grey-800 mt-7 text-right">{id} / {products.length}</p>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </article>

            {products.length > 1 ? <Navigation /> : null}
       </>
    )
}