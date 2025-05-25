import { updateProductQuantity } from "@/features/Cart/utils/products/updateProductQuantity";
import { ProductQuantityChange} from "@/features/Cart/types/Cart";

export const decreaseQuantity = ({setCart, id}: ProductQuantityChange) => {
    setCart((prevCart) => updateProductQuantity({cart: prevCart, id, quantityChange: - 1}));
}