import { CartProps } from "@/features/Cart/types/Cart"
import { addProductIfNotInCart } from "@/features/Cart/utils/addProductIfNotInCart";

export const removeDuplicateCartItemsById = ({setCart, product}: CartProps) => {
    setCart(oldProducts => addProductIfNotInCart({oldProducts, product}));
}