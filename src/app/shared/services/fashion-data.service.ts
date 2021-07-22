import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FashionDataService {
    getFashionData(){
        return [
        {
            id: 0,
            imgSrc: "assets/images/woman-2564660_1920.jpg",
            imgAlt: "...",
            fashionTitle: "Women's Fashion",
            fashionHref: "#"
        },
        {
            id: 1,
            imgSrc: "assets/images/lonely-814631_1920.jpg",
            imgAlt: "...",
            fashionTitle: "Men's Fashion",
            fashionHref: "#"

        },
        {
            id: 2,
            imgSrc: "assets/images/clothing-store-984396_1920 (1).jpg",
            imgAlt: "...",
            fashionTitle: "Just Fashion",
            fashionHref: "#"
        }
    ]
}

}