import {CartItems} from '@/features/Cart/types/Cart';
export const updateCartToStorage = ({cart}: CartItems) => 
{
    localStorage.setItem('cart', JSON.stringify(cart));
}