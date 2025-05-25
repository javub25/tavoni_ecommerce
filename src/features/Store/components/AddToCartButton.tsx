import shoppingCart from "@/features/Cart/assets/img/shopping-cart-white.svg"
import { addProductToCart } from "@/features/Cart/utils/cart/addProductToCart";
import { AddCartProps } from "@/features/Carousel/types/Carousel";

export const AddToCartButton = ({setCart, product}: AddCartProps) => 
{
    return (
        <button className="addCart-button bg-[#dc2626] hover:bg-[#b91c1c] w-full max-w-[190px] rounded-full text-white flex items-center justify-center 
        gap-2 py-3 px-4 cursor-pointer"
            data-testid="addToCartButton"
            onClick={() => addProductToCart({setCart, product})}>
            <img className="w-5 h-5 cursor-pointer" src={shoppingCart} alt="Cart Icon"/>
            Add to Cart
        </button>
    )
}