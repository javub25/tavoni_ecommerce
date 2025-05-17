import { UpdateProductQuantityProps } from "@/features/Cart/types/Cart";

export const updateProductQuantity = ({cart, id, change}: UpdateProductQuantityProps) => {
  
  return cart.map((product) => {

     if (product.id!== id) return product;

      const newQuantity = Math.max(1, (product.quantity ?? 1) + change);

      return { ...product, quantity: newQuantity };
  });
}