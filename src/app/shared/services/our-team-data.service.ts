import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OurTeamDataService {
    getMembersData(){
        return [
        {
            id: 0,
            imgSrc: "assets/images/woman-234.jpg",
            imgAlt: "...",
            memberName: "Alexandra Borenko",
            memberPosition: "Co-Founder",
            aboutMember: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.",
        },
        {
            id: 1,
            imgSrc: "assets/images/woman-234.jpg",
            imgAlt: "...",
            memberName: "John Doe",
            memberPosition: "Pro-Manager",
            aboutMember: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.",
        },
        {
            id: 2,
            imgSrc: "assets/images/woman-234.jpg",
            imgAlt: "...",
            memberName: "Cristopher Nolan",
            memberPosition: "CEO",
            aboutMember: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.",
        },
        {
            id: 3,
            imgSrc: "assets/images/woman-234.jpg",
            imgAlt: "...",
            memberName: "Manager",
            memberPosition: "Founder",
            aboutMember: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.",
        },
        {
            id: 4,
            imgSrc: "assets/images/woman-234.jpg",
            imgAlt: "...",
            memberName: "Alexandra Borenko",
            memberPosition: "Co-Founder",
            aboutMember: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.",
        },
        {
            id: 5,
            imgSrc: "assets/images/woman-234.jpg",
            imgAlt: "...",
            memberName: "John Doe",
            memberPosition: "Pro-Manager",
            aboutMember: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.",
        },
        {
            id: 6,
            imgSrc: "assets/images/woman-234.jpg",
            imgAlt: "...",
            memberName: "Cristopher Nolan",
            memberPosition: "CEO",
            aboutMember: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.",
        },
        {
            id: 7,
            imgSrc: "assets/images/woman-234.jpg",
            imgAlt: "...",
            memberName: "Manager",
            memberPosition: "Founder",
            aboutMember: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.",
        },
        
    ]
}

}