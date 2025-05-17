
export type Product = {
    id:number;
    title: string;
    images: string[];
    description: string;
    category: string;
    price: number;
    quantity?: number | undefined;
}

export type Products = Product[];
