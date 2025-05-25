import { ProductNewQuantityProps } from "@/features/Cart/types/Cart";

export const calculateNewQuantity = ({quantity, quantityChange}: ProductNewQuantityProps) => 
{
    const newQuantity = Math.max(1, (quantity ?? 1) + quantityChange);

    return {newQuantity};
}