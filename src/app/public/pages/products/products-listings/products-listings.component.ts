import { ScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { DialogPosition } from '@angular/material/dialog';
import { QuickViewComponent } from 'src/app/shared/components/quick-view/quick-view.component';
import { Product } from 'src/app/shared/models/product.model';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products-listings',
  templateUrl: './products-listings.component.html',
  styleUrls: ['./products-listings.component.css']
})
export class ProductsListingsComponent implements OnInit {
  products: Product[] = [];
  constructor(private modalService:ModalService, private productService: ProductService) {
  }

  openQuickView(id:number){
    this.modalService.openQuickView(id);
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=> this.products = data)
  }

}
