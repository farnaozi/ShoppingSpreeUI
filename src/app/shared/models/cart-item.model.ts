import { Product } from "./product.model";

export interface CartItem{
    quantity:number,
    size:string,
    color: string,
    product: Product
}