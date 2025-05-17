import {useEffect, useState} from "react";
import {Products} from "@/features/Store/types/Product";
import axios from "axios";
import {getProductAdapter} from "@/adapters/getProductAdapter";


export const useProducts = () => 
{
    const [products, setProducts] = useState<Products>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchProducts = async() => 
    {
        try
        {
            const response = await axios.get("https://dummyjson.com/products?limit=12");
            const {status, data} = response;
            const {products} = data;

            const adaptedProducts = getProductAdapter(products);

            if (status === 200) {
                setProducts(adaptedProducts);
            }
        }
        catch(error){
            console.error("Failed to fetch products", error);
        }
        finally
        {
            setLoading(false);
        }
    }

    useEffect(() => 
    {
        fetchProducts();
    }, [])

    return {
        products, setProducts, loading
    };
}