import { OrderConfirmationProp } from "@/features/Cart/types/Cart";
import { getRandomOrderNumber } from "@/features/Cart/utils/order/getRandomOrderNumber";
import { getOrderDate } from "@/features/Cart/utils/order/getOrderDate";
import { OrderSuccessConfetti } from "@/features/Confetti/components/OrderSuccessConfetti";
import greenCheck from "@/features/Cart/assets/img/green-check.svg";
import shoppingBag from "@/features/Cart/assets/img/shopping-bag.svg";

export const OrderConfirmation = ({setOrderConfirmation}: OrderConfirmationProp) => 
{
    const orderNumber = getRandomOrderNumber();
    const {currentDate} = getOrderDate();
    const {day, month, year} = currentDate;

    return (
        <>            
            <section className="py-7 rounded-md">
                <div className="mx-auto mb-4 flex h-18 w-18 items-center justify-center rounded-full bg-[#D1FAE5]">
                    <img src={greenCheck} alt="Check Circle" className="w-10 h-10 mx-auto"/>
                </div>

                <h2 className="text-center text-2xl text-black font-bold my-8 tracking-tight">Thank You For Your Order!</h2>
                
                <article className="bg-[#f1f5f9] rounded-lg p-6 w-full max-w-sm mx-auto">
                     <div className="flex justify-between items-center gap-2 sm:flex-row flex-col mb-2">
                        <span className="text-md font-medium text-[#475569]">Order Number</span>
                        <span className="font-medium text-lg">{orderNumber}</span> 
                    </div>

                    <div className="flex justify-between items-center gap-2 sm:flex-row flex-col mb-2">
                        <span className="text-md font-medium text-[#475569]">Order Date</span>
                        <span className="font-medium text-lg">{day}/{month}/{year}</span>
                    </div>

                    <hr className="bg-[#f9fafb] h-[1px] w-full my-5"></hr>

                    <section className="flex justify-between items-center sm:flex-row flex-col ">
                        <span className="text-md font-medium text-[#475569]">Status</span>

                         <div className="flex items-center gap-1.5 mt-2" role="status" aria-label="Order Confirmed">
                             <img src={greenCheck} alt="Order Confirmed green check" className="w-5 h-5" />
                             <span className="text-[#087f72] font-medium">Order Confirmed</span>
                        </div>
                    </section>
                </article>

                <button className="confirmation-button" onClick={() => setOrderConfirmation(false)}>
                    <img src={shoppingBag} alt="Shopping Bag Icon" className="w-4 h-4"/> Continue Shopping
                </button>
            </section>
            
            <OrderSuccessConfetti />
        </>
    )
}