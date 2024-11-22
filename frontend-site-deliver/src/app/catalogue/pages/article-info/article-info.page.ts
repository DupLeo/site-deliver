import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.page.html',
  styleUrls: ['./article-info.page.scss'],
})
export class ArticleInfoPage implements OnInit {
  idItem : any;
  item : any;

  constructor(private route : ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idItem = params.get('id');
    });
    this.getItem();
    console.log(this.idItem);
  }

  back(){
    this.router.navigateByUrl('/');
  }

  getItem(){
    // recherche avec l'id en utilisant AXIOS vers la BDD
    this.item =  {id: 1, nom:"Table de bureau",price:"20", desc:"petite table de bureau."};
  }

}
