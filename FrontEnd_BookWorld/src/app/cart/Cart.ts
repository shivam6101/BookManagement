export class Cart {
  items: any = [];
  getTotalPrice(): Number {
    let totalPrice = 0;

    this.items.forEach((item: any) => {
      totalPrice += item.price;
    });

    return totalPrice;
  }
}
