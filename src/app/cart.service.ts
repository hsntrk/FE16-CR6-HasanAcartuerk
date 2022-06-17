import { Injectable } from '@angular/core';
import { IProducts } from './IProducts';
import { products } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IProducts[] = [];

  constructor() {}

  addToCart(product: IProducts) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  total() {
    let total = 0;

    for (let val of this.items) {
      total = total + val.price;
    }
    return total;
  }

  discount() {
    let discount = 0;
    let totalsum = this.total() * 1.1;

    if (totalsum > 40) {
      discount = (totalsum * 0.15);
    } else {
      discount = 0;
    }
    return discount;
  }

  totalAmount() {
    let totalamount = 0;
    let totalproduct = this.total();
    let discountsum = this.discount();

    for (let val of this.items) {
      totalamount = (totalproduct + totalproduct * 0.1) - discountsum;
    }
    return totalamount;
  }

  itemsLength() {
    return this.items.length;
  }
}
