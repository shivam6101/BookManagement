import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Form } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(
    private productServ: ProductService,
    private activeRoute: ActivatedRoute
  ) {}

  book: Product | any;
  pathId: Number | any;

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.pathId = params['id'];
      console.log(this.pathId);
    });

    this.productServ.getProductByID(this.pathId).subscribe((res) => {
      this.book = res;
      console.log(this.book);
    });
  }

  addProductData(productData: any) {
    console.log(productData.value);
    let ProductDetails = {
      categary: productData.value.categary,
      productName: productData.value.name,
      authorName: productData.value.author,
      description: productData.value.description,
      price: productData.value.price,
      imageUrl: productData.value.imageUrl,
      Quantity: productData.value.Quantity,
    };
    this.productServ.createProduct(ProductDetails).subscribe(
      (res) => {
        alert('Book added successFully');
        console.log(res);
      },
      (err) => {
        alert('Something went wrong');
        console.log(err);
      }
    );
  }
}
