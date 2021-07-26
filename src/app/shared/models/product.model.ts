export interface Product{
    id:number;
    name:string;
    price:number;
    salePrice?:number;
    reviews:{
      reviewer:string;
      rating:number;
      review:string;
    }[]
    sizes:string[];
    colors:string[];
    description:string;
  }
