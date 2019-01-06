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

  async getCart() {
    let cartId = await this.getOrCreateId();
    return this.db.object('/shopping-carts/'+ cartId);
  }
  
  private getItem(cartId, product: Product) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + product.$key);
  }
  async getOrCreateId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if(cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId',result.key);

    return result.key;
  }

  async addToCart(product: Product) {
    this.updateItemQuantity(product,1);
  }

  async removeFromCart(product: Product) {
    this.updateItemQuantity(product,-1);
  }

  async updateItemQuantity(product: Product,change: Number) {
    let cartId = await this.getOrCreateId();
    let item$ = this.getItem(cartId,product);
    item$.pipe(take(1)).subscribe(item => {
      item$.update({ product: product, quantity: (item.quantity || 0) + change})
    })
  }
}
