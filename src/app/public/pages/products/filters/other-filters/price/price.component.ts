import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  value: number = 0;
  highValue: number = 10000;
  options: Options = {
    floor: 0,
    ceil: 10000
  };
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

  priceRangeChanged(){
    this.productService.loader = true;
    this.productService.productsFiltered.next();
  }

  isPriceRangeChanged(){
    if(this.productService.productsFilters.endPrice < 10000 
      || this.productService.productsFilters.startPrice > 0 )
      return true;

    return false;
  }

  clear(){
    this.productService.loader = true;
    this.productService.productsFilters.startPrice = 0;
    this.productService.productsFilters.endPrice = 10000;
    this.productService.productsFiltered.next();
  }

}
