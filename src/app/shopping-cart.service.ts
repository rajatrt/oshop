import { take } from 'rxjs/operators';
import { Product } from './models/products';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated : new Date().getTime()
    })
  }

  private getCart(cartId) {
    return this.db.list('/shopping-carts/'+ cartId);
  }
  
  async getOrCreateId() {
    let cartId = localStorage.getItem('cartId');
    if(cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId',result.key);

    return result.key;
  }

  async addToCart(product: Product) {
    let cartId = await this.getOrCreateId();

    let item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.$key);
    item$.pipe(take(1)).subscribe(item => {
      if(item.$exists()) item$.update({ quantity : item.quantity + 1 });
      else item$.set({ product : product, quantity : 1});
    })
  }
}
