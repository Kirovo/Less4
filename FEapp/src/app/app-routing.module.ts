import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { SuccessComponent } from './cart/success/success.component';
import { DetailComponent } from './product-list/detail/detail.component';

const routes: Routes = [
  {path:'', component: ProductListComponent},
  {path:'cart', component: CartComponent},
  {path:'success', component: SuccessComponent},
  {path:'detail', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
