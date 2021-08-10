import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  selectSize(size: string){
    this.productService.loader = true;
    if(this.isSizeSelected(size)){
      let index = this.productService.productsFilters.sizes.indexOf(size);
      this.productService.productsFilters.sizes.splice(index, 1);
      this.productService.productsFiltered.next();
      return;
    }

    
  this.productService.productsFilters.sizes.push(size);
  this.productService.productsFiltered.next();
  }

  getSizesCount(){
    return this.productService.productsFilters.sizes.length
  }


  isSizeSelected(size: string){
    if(this.productService.productsFilters.sizes.find(s => s == size) != undefined)
      return true;

      return false;
  }

  clear(){
    this.productService.loader = true;
    this.productService.productsFilters.sizes.splice(0);
    this.productService.productsFiltered.next();
  }

}
