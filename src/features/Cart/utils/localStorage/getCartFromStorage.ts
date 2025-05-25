export const getCartFromStorage = () => 
{
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    return {currentCart}
}