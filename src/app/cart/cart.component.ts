import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../IProducts';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: IProducts[] = [];
  total: number = 0;
  count: number = 0;
  totalamount: number = 0;
  discount: number = 0;

  checkoutForm = this.fb.group({
    name: '',
    adress: '',
  });
  // serri: CartService;
  constructor(private cartService: CartService, private fb: FormBuilder) {
    // this.serri = new CartService;
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.total();
    this.count = this.cartService.itemsLength();
    this.totalamount = this.cartService.totalAmount();
    this.discount = this.cartService.discount();
  }
}
