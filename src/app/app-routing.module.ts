import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListOrderComponent } from './order/list-order/list-order.component';
import { OrderModule } from './order/order.module';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ViewAllProductComponent } from './products/view-all-product/view-all-product.component';
import { ViewProductByCategaryComponent } from './products/view-product-by-categary/view-product-by-categary.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    //component: user books show page
    redirectTo: 'list-product',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'order',
    component: ListOrderComponent,
  },
  {
    path: 'view-product',
    component: ViewProductComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'list-product',
    component: ViewAllProductComponent,
  },
  {
    path: 'list-product-byCategory',
    component: ViewProductByCategaryComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
