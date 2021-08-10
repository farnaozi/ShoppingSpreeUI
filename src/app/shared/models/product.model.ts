export interface Product{
    id:number;
    name:string;
    category:string;
    availability:boolean,
    price:number;
    salePrice?:number;
    reviews:{
      reviewer:string;
      rating:number;
      review:string;
    }[];
    sizes:string[];
    colors:string[];
    description:string;
  }
