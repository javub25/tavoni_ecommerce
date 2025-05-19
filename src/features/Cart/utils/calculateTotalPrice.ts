import { ProductNewPriceProps } from "@/features/Cart/types/Cart";

export const calculateTotalPrice = ({price, quantity, newQuantity}: ProductNewPriceProps) => 
{
  const unitPrice = price / (quantity ?? 1);
  const totalPrice = unitPrice * newQuantity;

  return {totalPrice};
}