import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  selectRating(rating: number){
    this.productService.loader = true;
    this.productService.productsFilters.review = rating;
    this.productService.productsFiltered.next();
  }

  getSelectedRating(){
    return this.productService.productsFilters.review;
  }

  clear(){
    this.productService.loader = true;
    this.selectRating(0);
  }
}
