import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommanderArticlePage } from './commander-article.page';

const routes: Routes = [
  {
    path: '',
    component: CommanderArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommanderArticlePageRoutingModule {}
