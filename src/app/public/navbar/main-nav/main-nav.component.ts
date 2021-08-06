import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { NavbarRoutersService } from '../navbar-routers.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  navbarRoutersData:any;
  showSearchBar:boolean = false;

  constructor(private navbarRouters: NavbarRoutersService, 
    public shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.navbarRoutersData = this.navbarRouters.getRoutersData();
    this.shoppingCartService.shoppingCartItems = this.shoppingCartService.getShoppingCartItems();
  }

  showSearchBarFunc(){
    this.showSearchBar = !this.showSearchBar;
  }

}
