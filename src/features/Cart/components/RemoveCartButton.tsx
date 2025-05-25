import trash from "@/assets/img/trash.svg";
import { removeProductFromCart } from "@/features/Cart/utils/cart/removeProductFromCart";
import { CartProps } from "@/features/Cart/types/Cart";

export const RemoveCartButton = ({product, setCart}: CartProps) =>
{
    return (
        <button className="w-8 text-center hover:text-[#dc2626]" 
            onClick={() => removeProductFromCart({setCart, product})}>
            <img src={trash} alt="trash" className="w-4 h-4 cursor-pointer"/>
        </button>
    );
}