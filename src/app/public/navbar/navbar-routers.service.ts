import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NavbarRoutersService {
    getRoutersData(){
        return [
        {
            home: "",
            products: "products",
            productId: "product/:1",
            contact: "contact",
            aboutUs: "about-us",
            myWishlist: "my-wishlist",
            accountDashboard: "account-dashboard",
            shoppingCart: "shopping-cart",
            checkout: "checkout"
        }
    ]
}

}