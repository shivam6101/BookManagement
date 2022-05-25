import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductListTableComponent } from './product-list-table/product-list-table.component';

import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByCategaryComponent } from './view-product-by-categary/view-product-by-categary.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'add-product/:id', component: AddProductComponent },
  { path: 'list-product', component: ViewAllProductComponent },
  { path: 'serachByCat', component: ViewProductByCategaryComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
  { path: 'delete-product', component: DeleteProductComponent },
  { path: 'product-table', component: ProductListTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
