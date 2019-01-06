import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/products';
import { Component, Input } from '@angular/core';
import { AUTH_PROVIDERS } from 'angularfire2/auth';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input('product') product: Product
  @Input('show-actions') showActions = true;
  constructor(private cartService : ShoppingCartService) { }

  addToCart(product : Product){
    this.cartService.addToCart(product);
  }
}
