import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';
import { Cart } from './Cart';
import { CartItem } from './CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public product: any = [];
  public allproducts = 0;
  public grandTotal: Number = 0;
  public curQuantity: Number = 0;
  public curPrice: Number = 0;
  //public TotalPrice: number = 0;
  public curbookId: string | any;
  total: any;
  last: any;

  totalPrice: any;
  list: [] = [];

  constructor(private cartServ: CartServiceService) {}

  ngOnInit(): void {
    this.cartServ.getProducts().subscribe((res) => {
      this.product = res;
    });

    this.grandTotal = this.cartServ.getTotalAmount();
    console.log('grand' + this.grandTotal);

    this.list = this.cartServ.cartItemList;
    console.log(this.list);
  }

  removeItem(book: any) {
    this.cartServ.removeCartItem(book);
  }

  emptyCart() {
    this.cartServ.removeAllCartData();
  }

  addToCart(item: any) {
    console.log(item);
    this.cartServ.addTocart(item).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    });
    //this.cartService.addToCart(item);
  }
  inc(book: any) {
    if (book.quantity != 5) book.quantity = book.quantity + 1;
    ///this.TotalPrice = book.quantity * book.price;
    this.curPrice = book.price;
    this.curQuantity = book.quantity;
    this.curbookId = book.id;
    console.log(this.curbookId, this.curQuantity, this.curPrice);

    this.total = this.cartServ.getTotalPrice(
      this.curbookId,
      this.curQuantity,
      this.curPrice
    );
    console.log('total' + this.total);
    this.grandTotal = this.cartServ.getTotalAmount();
  }

  dec(book: any) {
    if (book.quantity != 1) book.quantity = book.quantity - 1;
    //this.TotalPrice = book.quantity * book.price;
    this.curPrice = book.price;
    this.curQuantity = book.quantity;
    this.curbookId = book.id;
    this.total = this.cartServ.getTotalPrice(
      this.curbookId,
      this.curQuantity,
      this.curPrice
    );
    console.log('total' + this.total);
    this.grandTotal = this.cartServ.getTotalAmount();
  }
}
