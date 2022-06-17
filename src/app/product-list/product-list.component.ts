import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products';
import { IProducts } from '../IProducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: IProducts[] = products;
  product: IProducts = {} as IProducts;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart() {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(this.product);
    // console.log(this.product);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id == params['productId'];
      this.product = products[this.id];
      
    });
  }
}
