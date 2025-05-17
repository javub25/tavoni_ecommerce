import { Products } from "@/features/Store/types/Product";

export const TotalPrice = ({cart}: {cart: Products}) => 
{
    const totalPrice = cart.reduce((acc, product) => {
        return acc + product.price;
    }, 0);

    return (
        <>
            <hr className="bg-[#f9fafb] h-[1px] w-full"></hr>
            <ul className="flex justify-between font-medium mt-6">
                <li>
                    <span>Total</span>
                </li>
                <li>
                    <span data-testid="totalPrice">{totalPrice.toFixed(2)}€</span>
                </li>
            </ul>
        </>   
    )
}