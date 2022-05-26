import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../cart/Cart';
import { CartItem } from '../cart/CartItem';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  baseUrl = `http://localhost:8080`;
  //get product data
  getProducts() {
    return this.productList.asObservable();
  }
  //setting product data
  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(this.cartItemList);
  }
  //adding to cart
  addTocart(item: any) {
    console.log("running till cart");
    console.log("itemmmmm",item);
    return this.http.put(`${this.baseUrl}/user/addbooktocart/628ea79e8dcbb568470d4b04`,item,{responseType:"text"});
  }

  //get total
  getTotalAmount(): Number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal = grandTotal + a.TotalPrice;
      console.log(a.TotalPrice);
    });
    this.cartItemList.map((a: any) => {
      console.log(a);
    });

    console.log(grandTotal);
    return grandTotal;
  }
  getTotalPrice(curbookId: any, curQuantity: any, curPrice: any): Number {
    let Total = 0;

    this.cartItemList.map((a: any) => {
      if (a.id == curbookId) {
        a.TotalPrice = curQuantity * curPrice;
        console.log('*' + curQuantity * curPrice);
        console.log('a' + a.TotalPrice);
        Total = a.TotalPrice;
      }
    });
    this.getTotalAmount();
    this.productList.next(this.cartItemList);

    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal = grandTotal + a.TotalPrice;
      console.log(a.TotalPrice);
    });
    console.log(grandTotal);

    console.log('this is total' + Total);
    return Total;
  }

  //remove product from cart data
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.getTotalAmount();
    this.productList.next(this.cartItemList);
  }
  //remove alll
  removeAllCartData() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
