import { AddToCartButton } from "@/features/Store/components/AddToCartButton";
import { CartProps } from "@/features/Cart/types/Cart"

export const ProductInfo = ({setCart, product}: CartProps) => 
{
    const {images: [image], description, title, price} = product;

    return (
        <article className="max-w-3xl mx-auto mt-30 mb-12 px-4">
            <div id="product" className="py-7 rounded-3xl shadow-2xl bg-[#ffffff] dark:bg-[#1f2937] px-5 border-3 border-[#f3f4f6]" >
                <ul className="grid md:grid-cols-2 grid-col-1 gap-6">
                    <li>
                        <img src={image} alt={title} className="w-[300px] h-auto mx-auto"/>
                    </li>
                    <li>
                        <h1 className="text-black dark:text-white text-2xl font-bold mb-2">{title}</h1>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">{description}</p>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{price}€</p>
                        <AddToCartButton setCart={setCart} product={product}/>
                    </li>
                </ul>
            </div>
        </article>
    )
}