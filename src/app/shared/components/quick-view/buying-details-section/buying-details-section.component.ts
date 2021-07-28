import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-buying-details-section',
  templateUrl: './buying-details-section.component.html',
  styleUrls: ['./buying-details-section.component.css']
})
export class BuyingDetailsSectionComponent implements OnInit {
  @Input() product: Product | undefined;
  reviewStarCount:number[] = []
  constructor() {
   }

  ngOnInit(): void {
  }

  counter(reviews:any[] | undefined) {
    if(reviews?.length != 0){
      let sum = 0;
      reviews!.forEach(rev => sum+=rev.rating );
      return new Array(Math.ceil(sum/reviews?.length!));
    }

    return new Array(0);
  }
}
