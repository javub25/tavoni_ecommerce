import { Product , Products} from "@/features/Store/types/Product";
import {BooleanFunction} from "@/features/Carousel/types/Carousel.ts"

type QuantitySetter = () => void;
type WithCart = {
    cart: Products;
    setCart: (updater: (oldProducts: Products) => Products) => void;
}
type WithOldProducts = {
    oldProducts: Products;
}
type WithProduct = {
    product: Product;
}
type WithProductID = {
    id: number;
}
type WithProductPrice = {
    price: number;
}
type WithProductQuantity = 
{
    quantity: number | undefined;
    quantityChange: number;
    newQuantity: number;
}
type WithOrderConfirmation = {
    orderConfirmation: boolean;
    setOrderConfirmation: BooleanFunction;
}

export type CartProps = Pick<WithCart, "setCart"> & WithProduct;

export type CartContextProps = WithCart;

export type AddUniqueProductProps = Pick<WithProduct, "product"> & WithOldProducts

export type UpdateProductQuantityProps = Pick<WithCart, "cart"> & WithProductID & Pick<WithProductQuantity, "quantityChange">;

export type ProductQuantityChange = Pick<WithCart, "setCart"> & WithProductID;

export type ProductQuantityCounterProps = Pick<WithProductQuantity, "quantity"> & {
  onIncrease: QuantitySetter
  onDecrease: QuantitySetter
};

export type ProductPriceProps = WithProductQuantity & WithProductPrice;

export type ProductNewQuantityProps = Omit<WithProductQuantity, "newQuantity">

export type ProductNewPriceProps = WithProductPrice & Omit<WithProductQuantity, "quantityChange">

export type ProductQuantityUpdated = WithProduct & Omit<WithProductQuantity, "newQuantity"> & WithProductPrice;

export type OrderStepsProps = WithCart & WithOrderConfirmation;

export type CartProductsProps = WithCart & Pick<WithOrderConfirmation, "setOrderConfirmation">

export type OrderConfirmationProp = Pick<WithOrderConfirmation, "setOrderConfirmation">