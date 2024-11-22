import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleInfoPageRoutingModule } from './article-info-routing.module';

import { ArticleInfoPage } from './article-info.page';
import {ButtonValidateComponent} from "../../../componentGlobal/button-validate/button-validate.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleInfoPageRoutingModule
  ],
  declarations: [ArticleInfoPage, ButtonValidateComponent]
})
export class ArticleInfoPageModule {}
