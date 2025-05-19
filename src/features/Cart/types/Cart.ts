import { Product , Products} from "@/features/Store/types/Product";

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

export type ProductNewQuantityProps = Pick<WithProductQuantity, "quantity" | "quantityChange">

export type ProductNewPriceProps = WithProductPrice & Pick<WithProductQuantity, "quantity" | "newQuantity">

export type ProductQuantityUpdated = WithProduct & Pick<WithProductQuantity, "quantity" | "quantityChange"> & WithProductPrice;