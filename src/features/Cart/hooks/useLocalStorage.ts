import {useEffect} from 'react';
import {WithCart} from '@/features/Cart/types/Cart';
import {getCartFromStorage} from '@/features/Cart/utils/localStorage/getCartFromStorage';
import { updateCartToStorage } from '@/features/Cart/utils/localStorage/updateCartToStorage';

export const useLocalStorage = ({cart, setCart}: WithCart) => 
{
    const {currentCart} = getCartFromStorage();

    useEffect(() => {
        setCart(currentCart)
    }, []);

    useEffect(() => {
        updateCartToStorage({cart});
    }, [cart]);
}