import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyWishListService {
    getMyWishListData(){
        return of([
        {
            id: 0,
            imgSrc: "/assets/images/product.jpg",
            imgAlt: "...",
            itemName: "Piqué Biker Jacket",
            itemPrice: 15.00,
            availability:false,
            itemColor: "blue",
            itemSize: 'M'
        },
        {
            id: 1,
            imgSrc: "/assets/images/product.jpg",
            imgAlt: "...",
            itemName: "Piqué Biker Jacket",
            itemPrice: 7.99,
            availability:true,
            itemColor: 'red',
            itemSize: 'S'

        },
        {
            id: 2,
            imgSrc: "/assets/images/product.jpg",
            imgAlt: "...",
            itemName: "Piqué Biker Jacket",
            itemPrice: 30.00,
            availability:false,
            itemColor: 'green',
            itemSize: 'XXL'
        }
    ])
}

}