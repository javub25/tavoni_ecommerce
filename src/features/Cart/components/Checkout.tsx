import { OrderConfirmationProp } from "@/features/Cart/types/Cart"
import arrowRight from "@/features/Cart/assets/img/arrow-right.svg"

export const Checkout = ({setOrderConfirmation}: OrderConfirmationProp) => 
{
    return (
        <button className="confirmation-button" onClick={() => setOrderConfirmation(true)}>
            Checkout <img src={arrowRight} alt="Proceed to Checkout" className="w-4 h-4 pulse animate-pulse"/>
        </button>
    )
}