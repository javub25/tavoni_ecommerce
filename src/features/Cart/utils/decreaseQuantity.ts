import { updateProductQuantity } from "@/features/Cart/utils/updateProductQuantity";
import { ProductQuantityChange} from "@/features/Cart/types/Cart";

export const decreaseQuantity = ({setCart, id}: ProductQuantityChange) => {
    setCart((prevCart) => updateProductQuantity({cart: prevCart, id, change: - 1}));
}