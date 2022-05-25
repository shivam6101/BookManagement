import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  productId: any = 0;
  productData: Product | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productServ: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      this.productId = res['id'];
      console.log(this.productId);
    });

    this.productServ.getProductByID(this.productId).subscribe((res) => {
      this.productData = res;
      console.log(this.productData);
    });
  }
}
