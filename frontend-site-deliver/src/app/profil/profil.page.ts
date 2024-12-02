import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/api/user.service";
import {User} from "../data/user.model";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  user = {
    name: '',
    firstName: '',
    profession: '',
    store: ''
  };

  constructor(private userService: UserService) {}

  ngOnInit(

  ) {
    this.initUser(this.userService.getUserInfo()!)
  }



  initUser(userInfo: User){
    this.user.firstName = userInfo.firstname;
    this.user.profession = userInfo.poste;
    this.user.name = userInfo.lastname;
    this.user.store = userInfo.ville;
  }



  logout(){
    this.userService.logout()
  }

}
