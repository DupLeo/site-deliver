import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conn-auth',
  templateUrl: './conn-auth.page.html',
  styleUrls: ['./conn-auth.page.scss'],
})
export class ConnAuthPage implements OnInit {
  active = "login"


  setLogin() {
    this.active = "login";
  }

  setRegister() {
    this.active = "register";
  }


  constructor() { }

  ngOnInit() {
  }


}
