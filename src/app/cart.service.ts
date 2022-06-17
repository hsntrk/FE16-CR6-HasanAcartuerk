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

  itemsLength() {
    return this.items.length;
  }
}
