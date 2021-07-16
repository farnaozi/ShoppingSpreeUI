import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FashionDataService {
    getFashionData(){
        return [
        {
            id: 0,
            imgSrc: "assets/images/jacek-dylag-jo8C9bt3uo8-unsplash.jpg",
            imgAlt: "...",
            fashionTitle: "Women's Fashion",
            fashionHref: "#"
        },
        {
            id: 1,
            imgSrc: "assets/images/jacek-dylag-jo8C9bt3uo8-unsplash.jpg",
            imgAlt: "...",
            fashionTitle: "Men's Fashion",
            fashionHref: "#"

        },
        {
            id: 2,
            imgSrc: "assets/images/jacek-dylag-jo8C9bt3uo8-unsplash.jpg",
            imgAlt: "...",
            fashionTitle: "Just Fashion",
            fashionHref: "#"
        }
    ]
}

}