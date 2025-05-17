import {useState} from "react";
import { Product } from "@/features/Store/types/Product";

export const useProductInfo = () => {
    const INITIAL_PRODUCT = { id: 0, title: '', images: [], category: '', price: 0, description: '', quantity: 0};

    const [productInfo, setProductInfo] = useState<Product>(INITIAL_PRODUCT);

    return {productInfo, setProductInfo}
}