import { ScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { DialogPosition } from '@angular/material/dialog';
import { QuickViewComponent } from 'src/app/shared/components/quick-view/quick-view.component';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { Product } from 'src/app/shared/models/product.model';
import { ModalService } from 'src/app/shared/services/modal.service';
import { MyWishListService } from 'src/app/shared/services/my-wishlist.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-products-listings',
  templateUrl: './products-listings.component.html',
  styleUrls: ['./products-listings.component.css']
})
export class ProductsListingsComponent implements OnInit {
  products: Product[] = [];

  constructor(private modalService:ModalService, 
    private productService: ProductService,private myWishlistService:MyWishListService) {
  }

  openQuickView(id:number){
    this.productService.getProductById(id).subscribe(data=>{
      this.modalService.openQuickView(data);
    });
  }

  addToWishlist(myWishlistProd: Product){
    this.myWishlistService.addToWishlist(myWishlistProd, 1)
  }


  ngOnInit(): void {
    this.productService.loader = true;
    this.productService.productsFiltered.subscribe(() => {
      this.productService.getFilteredProducts().subscribe(data=> {
        setTimeout( ()=> {
          this.productService.loader = false;
          this.products = [...data]
        }, 300);
      });
    });
    this.productService.getFilteredProducts().subscribe(data=> {
      setTimeout( ()=> {
        this.productService.loader = false;
        this.products = [...data]
      }, 300);
    });
  }

  counter(reviews:any[]) {
    if(reviews.length != 0){
      let sum = 0;
      reviews!.forEach(rev => sum+=rev.rating );
      return new Array(Math.ceil(sum/reviews.length!));
    }

    return new Array(0);
  }

  getLoaderStatus(){
    return this.productService.loader;
  }
  
  addToCart(product:Product){
    this.productService.addToCart(product, 1)
  }
}
