import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
})
export class HeaderSearchComponent  implements OnInit {

  constructor() { }

  @Input() title: string = 'Toolbar'; // valeur par défaut


  ngOnInit() {}

}
