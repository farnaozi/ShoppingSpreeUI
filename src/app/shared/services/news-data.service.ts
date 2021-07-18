import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NewsDataService {
    getNewsData(){
        return [
        {
            id: 0,
            imgSrc: "assets/images/woman-234.jpg",
            imgAlt: "...",
            newsTitle: "What Curling Irons Are The Best Ones",
            newsParagraph: "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..",
            readMoreHref: "#"
        },
        {
            id: 1,
            imgSrc: "assets/images/woman-234.jpg",
            imgAlt: "...",
            newsTitle: "Vogue's Ultimate Guide To Autumn/ Winter 2019 Shoes",
            newsParagraph: "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..",
            readMoreHref: "#"

        },
        {
            id: 2,
            imgSrc: "assets/images/woman-234.jpg",
            imgAlt: "...",
            newsTitle: "What Curling Irons Are The Best Ones.Check this out",
            newsParagraph: "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..",
            readMoreHref: "#"
        },
        {
            id: 3,
            imgSrc: "assets/images/woman-234.jpg",
            imgAlt: "...",
            newsTitle: "What Curling Irons Are The Best Ones.Check this out",
            newsParagraph: "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..",
            readMoreHref: "#"
        }
    ]
}

}