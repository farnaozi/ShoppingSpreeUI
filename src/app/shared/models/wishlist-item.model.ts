import { Product } from "./product.model";

export interface WishlistItem{
    quantity:number,
    size:string,
    color: string,
    product: Product
}