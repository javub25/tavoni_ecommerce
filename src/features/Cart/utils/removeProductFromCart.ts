import { CartProps } from "@/features/Cart/types/Cart"

export const removeProductFromCart = ({setCart, product}: CartProps) => 
{
    setCart(oldProducts => oldProducts.filter(current => current.id!==product.id))
}