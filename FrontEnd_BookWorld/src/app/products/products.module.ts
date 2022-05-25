import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';

import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ViewProductByCategaryComponent } from './view-product-by-categary/view-product-by-categary.component';
import { ProductListTableComponent } from './product-list-table/product-list-table.component';

@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,

    ViewProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewAllProductComponent,
    ViewProductByCategaryComponent,
    ProductListTableComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  exports: [ViewAllProductComponent],
})
export class ProductsModule {}
