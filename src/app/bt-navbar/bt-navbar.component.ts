import { ShoppingCartService } from './../shopping-cart.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'bt-navbar',
  templateUrl: './bt-navbar.component.html',
  styleUrls: ['./bt-navbar.component.scss']
})
export class BtNavbarComponent implements OnInit {
  appUser: AppUser
  shoppingCartItemCount: number;

  constructor(public auth: AuthService, private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    let cart$ = await this.shoppingCartService.getCart();

    cart$.subscribe(cart => {
      this.shoppingCartItemCount = 0;
      for(let productId in cart.items){
        this.shoppingCartItemCount += cart.items[productId].quantity;
      }
    })
  }
  logout(){
    this.auth.logout();
  }
}
