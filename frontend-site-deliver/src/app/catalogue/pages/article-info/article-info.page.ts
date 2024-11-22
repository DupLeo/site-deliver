import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.page.html',
  styleUrls: ['./article-info.page.scss'],
})
export class ArticleInfoPage implements OnInit {
  article =  {
    nom: "Chaise de bureau",
    price: "70",
    desc: "Chaise de bureau très confortable, ergnonomique. Permet le repos du dos durant les séssions de travail et de code intance."
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl('/');
  }

}
