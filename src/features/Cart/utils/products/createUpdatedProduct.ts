import { ProductQuantityUpdated } from "@/features/Cart/types/Cart";
import { calculateTotalPrice } from "@/features/Cart/utils/products/calculateTotalPrice";
import { calculateNewQuantity } from "@/features/Cart/utils/products/calculateNewQuantity";

export const createUpdatedProduct = ({product, quantity, quantityChange, price}: ProductQuantityUpdated) => 
{
     const {newQuantity} = calculateNewQuantity({quantity, quantityChange});

      const {totalPrice} = calculateTotalPrice({price, quantity, newQuantity});
      
      return { ...product, quantity: newQuantity, price: totalPrice };
}