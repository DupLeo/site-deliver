import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommanderArticlePageRoutingModule } from './commander-article-routing.module';

import { CommanderArticlePage } from './commander-article.page';
import {ArticleComponent} from "../../component/article/article.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommanderArticlePageRoutingModule,
    ArticleComponent
  ],
  declarations: [CommanderArticlePage]
})
export class CommanderArticlePageModule {}
