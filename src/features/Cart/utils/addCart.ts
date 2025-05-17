import { CartProps } from "@/features/Cart/types/Cart"
import { removeDuplicateCartItemsById } from "@/features/Cart/utils/removeDuplicateCartItemsById"

export const addCart = ({setCart, product}: CartProps) => 
{
    removeDuplicateCartItemsById({setCart, product})
}