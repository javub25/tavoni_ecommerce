import { OrderStepsProps } from "@/features/Cart/types/Cart.ts";
import { CartProducts } from "@/features/Cart/components/CartProducts.tsx";
import { OrderConfirmation } from "./OrderConfirmation";

export const OrderSteps = ({cart, setCart, setOrderConfirmation, orderConfirmation}: OrderStepsProps) => 
{
    return (
        <>
            {orderConfirmation ? ( 
                <OrderConfirmation setOrderConfirmation={setOrderConfirmation}/>        
            ):( 
                <CartProducts 
                    cart={cart} 
                    setCart={setCart} 
                    setOrderConfirmation={setOrderConfirmation}
                /> 
            )}
        </>
    )
}