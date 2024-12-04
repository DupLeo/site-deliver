import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommanderArticlePage } from './commander-article.page';
import {ArticleInfoPage} from "../article-info/article-info.page";

const routes: Routes = [
  {
    path: '',
    component: CommanderArticlePage
  },
  { path: 'article-info/:id', component: ArticleInfoPage },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommanderArticlePageRoutingModule {}
