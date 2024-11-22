import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-commander-article',
  templateUrl: './commander-article.page.html',
  styleUrls: ['./commander-article.page.scss'],
})
export class CommanderArticlePage implements OnInit {

  @Input() idArticle : any;
  Article: any;
  etape : number = 1;



  constructor(private route : ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idArticle = params.get('id');
    });
    this.getItem();
    console.log(this.idArticle);
  }

  getItem(){
    // recherche avec l'id en utilisant AXIOS vers la BDD
    this.Article =  {id: 1, nom:"Table de bureau",price:"20", desc:"petite table de bureau."};
  }

  suivant(){
    this.etape = this.etape + 1;
  }
  retour(){
    this.etape = this.etape - 1;
  }
  reset(){
    this.etape = 1;
    this.idArticle = null;
    this.Article = {};
  }

}
