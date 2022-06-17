import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
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
  product: any;
  // id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(productselected : any) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(productselected);
    // console.log(this.product);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id: any = params.get("id");
      this.product = products[id];
      
    });
  }
}
