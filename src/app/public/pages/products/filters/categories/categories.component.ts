import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: string[] = ['all', 'bags', 'wallets', 'bracelets', 'others']
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  getCategory(){
    return this.productService.productsFilters.category;
  }

  setCategory(category: string){
    this.productService.loader = true;
    this.productService.productsFilters.category = category;
    this.productService.productsFiltered.next();
  }
}
