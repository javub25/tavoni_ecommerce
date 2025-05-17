import { AddUniqueProductProps } from "@/features/Cart/types/Cart";
 
export const addProductIfNotInCart = ({oldProducts, product}: AddUniqueProductProps) => 
{
    const isProductDuplicated = oldProducts.some(currentProduct => currentProduct.id === product.id);

    if(isProductDuplicated) {
        return oldProducts;
    }
    return [...oldProducts, product];
}