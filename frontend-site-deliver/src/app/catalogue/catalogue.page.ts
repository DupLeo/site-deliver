import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-catalogue',
  templateUrl: 'catalogue.page.html',
  styleUrls: ['catalogue.page.scss']
})
export class CataloguePage implements OnInit {
  // liste des items
  items = [{id: 1, nom:"Table de bureau",price:"20", desc:"petite table de bureau."},
    {id: 2, nom:"Lampe de chevet",price:"16", desc:"Lampe jaune trop cool."},
    {id: 3, nom:"Chaise Gamer",price:"120", desc:"Chaise de bureau [Gamer] bonne qualité."}]

  constructor(private router: Router) {}

  ngOnInit() {
  }
}
