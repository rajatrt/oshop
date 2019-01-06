import { ShoppingCartService } from './../shopping-cart.service';
import { switchMap } from 'rxjs/operators';
import { Product } from './../models/products';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnDestroy {
  products : Product[];
  category;
  filteredProduct: Product[];
  cart: any; 
  subscription : Subscription
  constructor(private route: ActivatedRoute, 
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService) {

    productService.getAll()
                  .pipe(switchMap( product => {
                          this.filteredProduct = this.products = product;
                          return route.queryParamMap
                  }))
                  .subscribe(params => {
                    this.category = params.get('category');
                    this.filteredProduct = (this.category) ?
                      this.products.filter(p => p.category === this.category ): this.products;
                 });
  }

  async ngOnInit() {
    this.subscription = (await this.shoppingCartService.getCart())
      .subscribe(cart => {console.log("cart-->>>",cart) ; this.cart = cart;})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
