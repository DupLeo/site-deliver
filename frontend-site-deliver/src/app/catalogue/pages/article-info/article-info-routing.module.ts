import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleInfoPage } from './article-info.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleInfoPageRoutingModule {}
