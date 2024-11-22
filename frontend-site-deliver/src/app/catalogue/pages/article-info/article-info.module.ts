import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleInfoPageRoutingModule } from './article-info-routing.module';

import { ArticleInfoPage } from './article-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleInfoPageRoutingModule
  ],
  declarations: [ArticleInfoPage]
})
export class ArticleInfoPageModule {}
