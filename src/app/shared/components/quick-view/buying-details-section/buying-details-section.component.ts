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
    if(this.product?.reviews.length != 0){
      let sum = 0;
      this.product?.reviews!.forEach(rev => sum+=rev.rating )
      this.reviewStarCount.length = Math.ceil(sum/this.product?.reviews.length!); 
    }
  }
  
}
