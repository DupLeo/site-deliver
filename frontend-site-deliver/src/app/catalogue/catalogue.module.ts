import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CataloguePage} from './catalogue.page';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import {LoginComponent} from "../conn-auth/component/login/login.component";
import {ArticleComponent} from "./component/article/article.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CatalogueRoutingModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [CataloguePage, LoginComponent, ArticleComponent]
})
export class CataloguePageModule {}
