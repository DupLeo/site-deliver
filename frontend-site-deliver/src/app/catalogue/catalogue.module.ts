import { IonicModule } from '@ionic/angular';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CataloguePage} from './catalogue.page';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import {LoginComponent} from "../conn-auth/component/login/login.component";
import {ArticleComponent} from "./component/article/article.component";
import {CommandePageModule} from "../commande/commande.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CatalogueRoutingModule,
    CommandePageModule,
    SharedModule,
    ArticleComponent,
  ],
  exports: [
    LoginComponent
  ],
  declarations: [CataloguePage, LoginComponent],
})
export class CataloguePageModule {}
