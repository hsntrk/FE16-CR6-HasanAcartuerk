import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// package that have some methods and properties that will help us to get the value from the URL and use it further
import { products } from '../products';
import { CartService } from '../cart.service';
import { IProducts } from '../IProducts';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  
  product: IProducts = {} as IProducts;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart() {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(this.product);
  }
  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['productId'];
      this.product = products[this.id];
    });
  }
}
