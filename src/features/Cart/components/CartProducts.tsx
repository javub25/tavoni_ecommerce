import {CartProductsProps} from "@/features/Cart/types/Cart.ts";
import {TotalPrice} from "@/features/Cart/components/TotalPrice.tsx";
import { RemoveCartButton } from "@/features/Cart/components/RemoveCartButton.tsx";
import {Checkout} from "@/features/Cart/components/Checkout.tsx";
import { ProductQuantityCounter } from "@/features/Cart/components/ProductQuantityCounter.tsx";
import { increaseQuantity } from "@/features/Cart/utils/increaseQuantity.ts";
import { decreaseQuantity } from "@/features/Cart/utils/decreaseQuantity.ts";

export const CartProducts = ({cart, setCart, setOrderConfirmation}: CartProductsProps) => 
{
    return (
        <>
            {cart.map((product) => {
                const {id, title, price, images: [productImage], quantity} = product;

                return (
                    <div key={id} className="mb-4">
                        <ul className="flex gap-4 flex-col sm:flex-row ">
                            <li className="w-40 h-40 rounded-md bg-[#f9fafb] mx-auto">
                                <img src={productImage} alt={title} className="object-cover"/>
                            </li>
                            <li className="flex-1">
                                <h3 className="font-medium">{title}</h3>
                                <p className="text-sm text-[#020618] mt-1">{price}€</p>
                                <ul className="flex items-center justify-between mt-4 w-34">
                                    <li className="flex items-center border rounded-md w-20 my-2">
                                        <ProductQuantityCounter 
                                            quantity={quantity} 
                                            onIncrease={() => increaseQuantity({setCart, id})}
                                            onDecrease={() => decreaseQuantity({setCart, id})}
                                        />
                                    </li>
                                    <li>
                                        <RemoveCartButton product={product} setCart={setCart} />
                                    </li>
                                </ul>                              
                            </li>
                            
                        </ul>  
                    </div>
                );
            })}
            <TotalPrice cart={cart} />
            <Checkout setOrderConfirmation={setOrderConfirmation}/>
        </>
    )
}