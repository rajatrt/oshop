import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'bt-navbar',
  templateUrl: './bt-navbar.component.html',
  styleUrls: ['./bt-navbar.component.scss']
})
export class BtNavbarComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  logout(){
    this.afAuth.auth.signOut();
  }
}
