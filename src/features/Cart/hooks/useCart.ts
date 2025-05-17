import {useState} from 'react';
import { Products } from '@/features/Store/types/Product';

export const useCart = () => 
{
    const [cart, setCart] = useState<Products>([]);

    return {cart, setCart}
}