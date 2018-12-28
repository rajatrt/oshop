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

  constructor(public auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  ngOnInit() {
  }
  logout(){
    this.auth.logout();
  }
}
