import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'bt-navbar',
  templateUrl: './bt-navbar.component.html',
  styleUrls: ['./bt-navbar.component.scss']
})
export class BtNavbarComponent implements OnInit {
  constructor(public outh: AuthService) {
  }

  ngOnInit() {
  }
  logout(){
    this.outh.logout();
  }
}
