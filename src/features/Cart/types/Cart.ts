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
type WithProductChange = {
    id: number;
    change: number;
}

export type CartProps = Pick<WithCart, "setCart"> & WithProduct;

export type CartContextProps = WithCart;

export type AddUniqueProductProps = Pick<WithProduct, "product"> & WithOldProducts

export type UpdateProductQuantityProps = Pick<WithCart, "cart"> & WithProductChange;

export type ProductQuantityChange = Pick<WithCart, "setCart"> & Pick<WithProductChange, "id">;

export type ProductQuantityCounterProps = {
  currentQuantity: number | undefined;
  onIncrease: QuantitySetter
  onDecrease: QuantitySetter
};