import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductImagesService {
    getProductImages(){
        return [
        {
            id: 0,
            imgSrc: "assets/images/product.jpg",
            imgAlt: "...",
        },
        {
            id: 1,
            imgSrc: "assets/images/product.jpg",
            imgAlt: "...",

        },
        {
            id: 2,
            imgSrc: "assets/images/product.jpg",
            imgAlt: "...",
        },
        {
            id: 3,
            imgSrc: "assets/images/product.jpg",
            imgAlt: "...",
        },
        {
            id: 4,
            imgSrc: "assets/images/product.jpg",
            imgAlt: "...",
        }
    ]
}

}