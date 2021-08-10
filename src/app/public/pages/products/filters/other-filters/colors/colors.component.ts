import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  colors:string[] = ['black', '#20315F', '#F1AF4D', '#225AC5',
  '#7917B6', '#D30000', '#E9E007', '#1BEFC9', '#FF3FE0', 
  'white']
  rowsNumber: number = 0;
  constructor(private productService: ProductService) { 
    this.rowsNumber = Math.ceil((this.colors.length)/6);
  }

  ngOnInit(): void {
  }

  selectColor(color: string){
    this.productService.loader = true;
    if(this.isColorSelected(color)){
      let index = this.productService.productsFilters.colors.indexOf(color);
      this.productService.productsFilters.colors.splice(index, 1);
      this.productService.productsFiltered.next();
      return;
    }
  
      
    this.productService.productsFilters.colors.push(color);
    this.productService.productsFiltered.next();
  }

  getColorsCount(){
    return this.productService.productsFilters.colors.length
  }

  isColorSelected(color: string){
    if(this.productService.productsFilters.colors.find(c => c == color) != undefined)
      return true;

      return false;
  }

  clear(){
    this.productService.loader = true;
    this.productService.productsFilters.colors.splice(0);
    this.productService.productsFiltered.next();
  }
}
