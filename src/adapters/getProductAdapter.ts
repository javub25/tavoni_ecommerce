import {Products, Product} from "@/features/Store/types/Product";

export const getProductAdapter = (products: Products) =>
{
     return products.map((product: Product) =>{
        const {id, title, images, description, category, price} = product;
        
        return {
            id, title, price,
            images, category, description
        }
    });
}