import { UpdateProductQuantityProps } from "@/features/Cart/types/Cart";
import { createUpdatedProduct } from "@/features/Cart/utils/createUpdatedProduct.ts";

export const updateProductQuantity = ({cart, id, quantityChange}: UpdateProductQuantityProps) => {

  return cart.map((product) => {

    const {quantity, price} = product;

     if (product.id!== id) return product;

     else return createUpdatedProduct({product, quantityChange, quantity, price});
  });
}