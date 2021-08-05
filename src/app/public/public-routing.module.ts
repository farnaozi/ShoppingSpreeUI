import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  { path: '', 
  component:PublicComponent, children: [
    {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), pathMatch: 'full'},
    {path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)},
    {path: 'product/:id', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)},
    {path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)},
    {path: 'about-us', loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)},
    {path: 'account-dashboard', loadChildren: () => import('./pages/account-dashboard/account-dashboard.module').then(m => m.AccountDashboardModule)},
    {path: 'shopping-cart', loadChildren: () => import('./pages/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)},
    {path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule)},
    { path: '**', redirectTo:''}
  ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
