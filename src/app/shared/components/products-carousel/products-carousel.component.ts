import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.css']
})
export class ProductsCarouselComponent implements OnInit {
  @Input() title:string = "Newest Products";
  @Input() data:number[] = [1,2,3,4,5,6];
  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    margin: 30,
    autoplay:true,
    loop: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }
}
