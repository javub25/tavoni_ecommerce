import { Product } from "@/features/Store/types/Product";

export const addInitialQuantity = (product: Product) => product.quantity = 1;

