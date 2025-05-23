import {useState} from "react";

export const useOrderConfirmation = () => 
{
    const [orderConfirmation, setOrderConfirmation] = useState<boolean>(false);

    return {orderConfirmation, setOrderConfirmation}
}