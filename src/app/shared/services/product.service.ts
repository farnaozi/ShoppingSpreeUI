import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products:Product[] = [
    {
    id:1,
    name:"Piqué Biker Jacket",
    price:15,
    salePrice:5,
    rating:4,
    reviewCount:150,
    sizes:['XXL','XL', 'L', 'S'],
    colors:['Black']
  },
  {
    id:2,
    name:"Piqué Biker Jacket",
    price:15,
    rating:4,
    reviewCount:150,
    sizes:['XXL','XL', 'L', 'S'],
    colors:['Black']
  },
  {
    id:3,
    name:"Piqué Biker Jacket",
    price:15,
    rating:4,
    reviewCount:150,
    sizes:['XXL','XL', 'L', 'S'],
    colors:['#5E64D1', '#404A47', '#D5A667']
  },
  {
    id:4,
    name:"Piqué Biker Jacket",
    price:15,
    salePrice:5,
    rating:4,
    reviewCount:150,
    sizes:['XXL','XL', 'L', 'S'],
    colors:['Black']
  },
  {
    id:5,
    name:"Piqué Biker Jacket",
    price:15,
    salePrice:5,
    rating:4,
    reviewCount:150,
    sizes:['XXL','XL', 'L', 'S'],
    colors:['Black']
  },
  {
    id:6,
    name:"Piqué Biker Jacket",
    price:15,
    rating:4,
    reviewCount:150,
    sizes:['XXL','XL', 'L', 'S'],
    colors:['Black']
  }
];

  getProducts(){
    return this.createObservable(this.products);
  }

  getProductById(id: number){
    return this.createObservable(this.products)
    .pipe(map(products => products.find(product => product.id == id)));
  }

  updateProductById(id: number, product: Product){
    return this.createObservable(this.products)
    .pipe(tap( products => 
    {
      let index = products.findIndex(product => product.id == id);
      this.products[index] = product;
    }));
  }

  saveProduct(product: Product){
    return this.createObservable(this.products)
    .pipe(tap(products => 
    {
      products.push({...product});
    }));
  }

  createObservable(data:Product[]){
    return of(data)
  }
}
