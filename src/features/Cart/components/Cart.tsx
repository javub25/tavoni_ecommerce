import { useCartContext } from "@/contexts/Cart-context.tsx";
import { CartProducts } from "@/features/Cart/components/CartProducts.tsx";

export const Cart = () => 
{
    const {cart, setCart} = useCartContext();

    return (
        <article className="max-w-lg mx-auto shadow-lg p-8 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

            {cart.length === 0 ? (
                <p className="text-lg text-black mt-8 text-center mb-6">Your cart is empty</p>
            ): (
                <CartProducts cart={cart} setCart={setCart}/>
            )}
        </article>
    )
}