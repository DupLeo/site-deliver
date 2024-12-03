import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CatalogueService} from "../services/api/catalogue.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: 'catalogue.page.html',
  styleUrls: ['catalogue.page.scss']
})
export class CataloguePage implements OnInit {
  // liste des items
  items: any;

  constructor(private router: Router, private serviceCatalogue: CatalogueService) { }

  ngOnInit() {
    this.recupItems()
  }

  recupItems() {
    this.serviceCatalogue.getAll().subscribe((response: any) => {
      this.items = response.data;
    })
  }
}
