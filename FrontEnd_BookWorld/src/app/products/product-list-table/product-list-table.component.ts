import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list-table',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list-table.component.css'],
})
export class ProductListTableComponent implements OnInit {
  constructor(private prodServ: ProductService) {}
  ProductData: Product | any;
  ngOnInit(): void {
    this.prodServ.getAllProducts().subscribe((res) => {
      this.ProductData = res;
      console.log(this.ProductData);
    });
  }
  Deletebook(id: any) {
    console.log(id);

    this.prodServ.deleteProductByID(id).subscribe((res) => {
      this.ProductData = res;
      alert('Book  with Id:' + id + ' is deleted Successfully.');
      window.location.reload();
      console.log(this.ProductData);
    });
  }
}
