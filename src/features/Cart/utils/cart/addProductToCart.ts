import { CartProps } from "@/features/Cart/types/Cart"
import { addProductIfNotInCart } from "@/features/Cart/utils/cart/addProductIfNotInCart";

export const addProductToCart = ({setCart, product}: CartProps) => {
    setCart(oldProducts => addProductIfNotInCart({oldProducts, product}));
}