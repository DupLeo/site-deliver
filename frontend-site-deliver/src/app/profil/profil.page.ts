import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/api/user.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(private userService: UserService) {}

  ngOnInit() {
  }

  user = {
    name: 'Doe',
    firstName: 'John',
    profession: 'Vendeur',
    store: 'Magasin ABC'
  };

  logout(){
    this.userService.logout()
  }

}
