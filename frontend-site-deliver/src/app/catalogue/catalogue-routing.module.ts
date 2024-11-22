import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CataloguePage } from './catalogue.page';

const routes: Routes = [
  {
    path: '',
    component: CataloguePage,
  },
  {
    path: 'article-info/:id',
    loadChildren: () => import('./pages/article-info/article-info.module').then( m => m.ArticleInfoPageModule)
  },
  {
    path: 'commander-article/:id',
    loadChildren: () => import('./pages/commander-article/commander-article.module').then( m => m.CommanderArticlePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule {}
