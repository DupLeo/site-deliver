import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user = {
    name: 'Doe',
    firstName: 'John',
    profession: 'Vendeur',
    store: 'Magasin ABC'
  };

  logout() {
    // Logic for logout
  }

}
