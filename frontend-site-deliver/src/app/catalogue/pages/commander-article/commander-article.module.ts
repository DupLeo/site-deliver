import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommanderArticlePageRoutingModule } from './commander-article-routing.module';

import { CommanderArticlePage } from './commander-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommanderArticlePageRoutingModule
  ],
  declarations: [CommanderArticlePage]
})
export class CommanderArticlePageModule {}
