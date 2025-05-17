import { createContext, useContext} from "react";
import { useCart } from "@/features/Cart/hooks/useCart";
import { CartContextProps } from "@/features/Cart/types/Cart";

const CartContext = createContext<CartContextProps | null>(null);

const CartProvider = ({children}: {children: React.ReactElement}) => 
{
    const {cart, setCart} = useCart();

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => 
{
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider");
    }
    return context
}

export {CartProvider, useCartContext}