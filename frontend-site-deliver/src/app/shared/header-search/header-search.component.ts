import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/api/user.service";

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
})
export class HeaderSearchComponent  implements OnInit {

  @Input() title: string = 'Toolbar'; // valeur par défaut
  nameSite: string | undefined = ''

  constructor(private userService:UserService) {}


  ngOnInit() {
    this.nameSite = this.userService.getUserInfo()?.ville
  }

}
