import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OurTeamDataService {
    getMembersData(){
        return [
        {
            id: 0,
            imgSrc: "assets/images/tie-690084_1920.jpg",
            imgAlt: "...",
            memberName: "John Maleck",
            memberPosition: "Co-Founder",
            aboutMember: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.",
        },
        {
            id: 1,
            imgSrc: "assets/images/laptop-2561018_1920.jpg",
            imgAlt: "...",
            memberName: "Alexandra Borenko",
            memberPosition: "Pro-Manager",
            aboutMember: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.",
        },
        {
            id: 2,
            imgSrc: "assets/images/sad1-505857_1920.jpg",
            imgAlt: "...",
            memberName: "Cristopher Nolan",
            memberPosition: "CEO",
            aboutMember: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.",
        },
        {
            id: 3,
            imgSrc: "assets/images/woman234-1274056_1920.jpg",
            imgAlt: "...",
            memberName: "Lily Johnathan",
            memberPosition: "Founder",
            aboutMember: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.",
        },
        {
            id: 4,
            imgSrc: "assets/images/sad1-505857_1920.jpg",
            imgAlt: "...",
            memberName: "Alexandra Borenko",
            memberPosition: "Co-Founder",
            aboutMember: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.",
        },
        {
            id: 5,
            imgSrc: "assets/images/girl-919048_1920.jpg",
            imgAlt: "...",
            memberName: "Jane Doe",
            memberPosition: "Pro-Manager",
            aboutMember: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.",
        },
        {
            id: 6,
            imgSrc: "assets/images/laptop-2561018_1920.jpg",
            imgAlt: "...",
            memberName: "Cristopher JD",
            memberPosition: "CEO",
            aboutMember: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.",
        },
        {
            id: 7,
            imgSrc: "assets/images/tie-690084_1920.jpg",
            imgAlt: "...",
            memberName: "J.J Nolan",
            memberPosition: "Founder",
            aboutMember: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.",
        },
        
    ]
}

}