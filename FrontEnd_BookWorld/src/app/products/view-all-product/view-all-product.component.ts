import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css'],
})
export class ViewAllProductComponent implements OnInit {
  constructor(private productService: ProductService) {}

  searchKey: any = '';
  searchKeycat: any = '';

  productList: Product | any;
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res) => {
      this.productList = res;
      console.log(this.productList);
    });

    this.productService.keyfromSearchBar.subscribe((val: any) => {
      this.searchKey = val;

      this.productService.searchkeyfromcategory.subscribe((val: any) => {
        this.searchKeycat = val;
      });
    });
  }
}
