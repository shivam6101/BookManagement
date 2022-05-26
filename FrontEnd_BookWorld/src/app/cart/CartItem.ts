import { Product } from '../products/product';

export class CartItem {
  Product: Product;

  constructor(Product: Product) {
    this.Product = Product;
  }
  quantity: number = 1;
  getPrice() {
    return this.Product.price * this.quantity;
  }
}
