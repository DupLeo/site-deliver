import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {CatalogueService} from "../../../services/api/catalogue.service";

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.page.html',
  styleUrls: ['./article-info.page.scss'],
})
export class ArticleInfoPage implements OnInit {
  idItem: number | null = null;
  item: any;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceCatalogue: CatalogueService
  ) {}

  ngOnInit() {
    // Récupérer l'ID depuis les paramètres de la route
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.idItem = +id;
        this.getItem();
      }
    });
  }

  back() {
    this.router.navigateByUrl('/catalogue');
  }

  getItem() {
    if (this.idItem !== null) {
      this.serviceCatalogue.getArticle(this.idItem).subscribe({
        next: (response) => {
          this.item = response.article;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Erreur lors de la récupération de l\'article :', err);
        }
      });
    }
  }
}
