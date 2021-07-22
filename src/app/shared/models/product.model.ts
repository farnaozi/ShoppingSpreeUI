export interface Product{
    id:number;
    name:string;
    price:number;
    salePrice?:number;
    rating:number;
    reviewCount:number;
    sizes:string[];
    colors:string[];
  }
